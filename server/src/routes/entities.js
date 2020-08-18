const router = require('express').Router();
const pg = require("../data");
const { sortData, termGenerator } = require('../service');

router.get('/getData', async ( req, res ) => {
    try {
        const { search, sortBy, orderBy, limit, skip } = req.query;

        let select = (search) ? termGenerator(search) : `Select * from data`;
        console.log(search)

        let sort = sortData(sortBy, orderBy)

        let limitRecord = (limit && limit > 0) ? ` LIMIT ${limit}` : ' LIMIT ALL';
        let offset = (skip && skip > 0) ? ` OFFSET ${skip}` : ' OFFSET 0';

        const countQuery = await pg.query(select)
        const query = select + sort + offset + limitRecord ;
        console.log(query)
        let result = await pg.query(query)
        res.status(200).send({
            status: 'SUCCESS',
            message: 'Data fetched successfully',
            responseCount: countQuery.rowCount,
            response: result.rows
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({ status: 'FAILED', message:'Error while fetching data', error: error.message })
    }
});

module.exports = router;