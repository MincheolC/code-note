const dependencyInjectorLoader = require('./dependencyInjector');
const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');
// const jobsLoader = require('./jobs');
const logger = require('./logger');

module.exports = async ({ expressApp }) => {

    const mongoConnection = await mongooseLoader();
    logger.info('DB loaded and connected!');

    const userModel = {
        name: 'userModel',
        // Notice the require syntax and the '.default'
        model: require('../models/user'),
    };

    await dependencyInjectorLoader({
    // const { agenda } = await dependencyInjectorLoader({
        mongoConnection,
        models: [userModel],
    });
    // logger.info('Dependency Injector Loaded');

    // await jobsLoader({ agenda });
    // logger.info('✌️ Jobs loaded');

    await expressLoader({ app: expressApp });
    logger.info('Express Intialized');
};
