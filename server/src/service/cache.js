const redisClient = require('../redis');
const pg = require("../data");


const getFromCache = (type, query) => {
    return new Promise( (resolve, reject) => {
        //cache service's responsibility is to check if the query with response already exist
        // check if it exists
    redisClient.hget(type, query, (err, result) => {
        if(err) {
            console.log(err)
            resolve(null);
        }
        resolve(JSON.parse(result));
    });
    })
}

const cacheQuery = async (type, query) => {
    try {
        //if does not exist in cache, then insert response with query
        const result = await pg.query(query)
        const response = (type === 'count') ? result.rowCount : result.rows
        redisClient.hset(type, query, JSON.stringify(response));
        return response;
    } catch (error) {
        console.log(error);
        throw new Error("Error while caching")
    }
    
}

module.exports = { getFromCache, cacheQuery }