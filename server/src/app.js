const express = require("express")
const app = express()
const bodyParser = require('body-parser')

require('./config')
require('./data')

app.use( (req, res, next) => {
    req.header('Access-Control-Allow-Origin', '*')
    req.header('Access-Control-Allow-Credentials', true)
    req.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    req.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, content-type, application/json')
    next();
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.use('/api/v1/data', require('./router/entities'));
app.use('/', (req, res)=> res.status(200).send({ message: 'Backed is running'}));

module.exports = app;