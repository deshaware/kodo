const router = require('express').Router();
const data = require('../data/mock_data.json');
const pg = require("../data");
const service = require('../service')

router.get('/getData', async ( req, res ) => {
    try {
        console.log("hi")
    } catch (error) {
        console.log(error)
        res.status(400).send({ status: 'FAILED', message:'Error while fetching data', error: error.message })
    }
});

module.exports = router;