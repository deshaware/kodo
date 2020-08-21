const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

require('./config')
require('./data')
require('./redis')
// Redis Client Setup

// app.use( (req, res, next) => {
//     req.header('Access-Control-Allow-Origin', 'http://localhost:3000')
//     req.header('Access-Control-Allow-Credentials', true)
//     req.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     req.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, content-type, application/json')
//     next();
// })
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.use('/api/v1/data', require('./routes/entities'));
app.use('/', (req, res)=> res.status(200).send({ message: 'Backed is running'}));

module.exports = app;