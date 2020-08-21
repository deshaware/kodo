const router = require('express').Router();
const pg = require("../data");
const { sortData, termGenerator } = require('../service/db');
const { cacheQuery, getFromCache } = require('../service/cache');

router.get('/getData', async ( req, res ) => {
    try {
        const { search, sortBy, orderBy, limit, skip } = req.query;

        let select = (search) ? termGenerator(search) : `Select * from data`;
        console.log(search)

        let sort = sortData(sortBy, orderBy)

        let limitRecord = (limit && limit > 0) ? ` LIMIT ${limit}` : ' LIMIT ALL';
        let offset = (skip && skip > 0) ? ` OFFSET ${skip}` : ' OFFSET 0';

        const countQueryInCache = await getFromCache('count', select);
        const countQuery = countQueryInCache ? countQueryInCache : await cacheQuery('count', select)
        const query = select + sort + offset + limitRecord ;
        console.log(query)
        const cacheResult = await getFromCache('query', query)
        let result = cacheResult ? cacheResult :  await cacheQuery('query', query)
        res.status(200).send({
            status: 'SUCCESS',
            message: 'Data fetched successfully',
            responseCount: countQuery,
            response: result
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({ status: 'FAILED', message:'Error while fetching data', error: error.message })
    }
});

module.exports = router;