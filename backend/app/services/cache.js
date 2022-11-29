const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD, REDIS_DB } = process.env;
const Redis = require('ioredis');
const redisClient = new Redis({
    host: REDIS_HOST,
    port: REDIS_PORT,
    password: REDIS_PASSWORD,
    db: REDIS_DB
});

exports.set = (key, data, expire = null) => {
    if (expire) {
        return redisClient.set(key, data, 'EX', expire);
    }
    return redisClient.set(key, data);
};
exports.get = (key) => {
    return new Promise((resolve, reject) => {
        redisClient.get(key, (err, result) => {
            if (err) { reject(false) };
            resolve(result);
        });
    });
};