const router = require('express').Router();
const pg = require("../data");

router.get('/getData', async ( req, res ) => {
    try {
        const { search, sortBy, orderBy, limit, skip } = req.query;

        let select = (search) ? `Select * from data where name ilike '%${search}%' or description ilike '%${search}%'` : `Select * from data`;

        let sort = ( sortBy && sortBy.toLowerCase() === 'name') ? (` order by name ${orderBy && orderBy === 'desc' ? 'desc' : 'asc'}`) :
            ( sortBy && sortBy.toLowerCase() === 'datelastedited' ) ? (` order by name ${orderBy && orderBy === 'desc' ? 'desc' : 'asc'}`) :
            (` order by name ${orderBy && orderBy === 'desc' ? 'desc' : 'asc'}`);

        let limitRecord = (limit && limit > 0) ? ` LIMIT ${limit}` : ' LIMIT ALL';
        let offset = (skip && skip > 0) ? ` OFFSET ${skip}` : ' OFFSET 0';

        const query = select + sort + limitRecord + offset;
        console.log(query)
        let result = await pg.query(query)
        res.status(200).send({
            status: 'SUCCESS',
            message: 'Data fetched successfully',
            responseCount: result.rowCount,
            response: result.rows
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({ status: 'FAILED', message:'Error while fetching data', error: error.message })
    }
});

module.exports = router;