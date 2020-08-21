const redis = require('redis');

const redisClient = redis.createClient({
    host: process.env.REDISHOST,
    port: process.env.REDISPORT,
    retry_strategy: () => 1000,
});

// redisClient.flushall()

module.exports = redisClient;