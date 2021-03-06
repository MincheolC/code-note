/* eslint-disable no-undef */
const dotenv = require('dotenv');

const envFound = dotenv.config();

if (!envFound) {
    // This error should crash whole process
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

module.exports = {
    port: parseInt(process.env.PORT, 10),
    databaseURI: process.env.MONGODB_URI,
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },
    agenda: {
        dbCollection: process.env.AGENDA_DB_COLLECTION,
        pooltime: process.env.AGENDA_POOL_TIME,
        concurrency: parseInt(process.env.AGENDA_CONCURRENCY, 10),
    },
    jwtSecret: process.env.JWT_SECRET,
    api: {
        prefix: '/v1',
    }
};
