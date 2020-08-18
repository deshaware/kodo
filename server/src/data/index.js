const { Pool } = require("pg");

const pgClient = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
});

pgClient.connect( (err, client) => {
    if(err)
        throw err;
    console.log("Connected to DB")
    
});

pgClient.on('error', () => console.log('Connection Lost'))

// pgClient.on('connect', client => {
//     dbClient = client;
//     console.log('Connected to PG Client')
// })

module.exports = pgClient;