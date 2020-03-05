const dependencyInjectorLoader = require('./dependencyInjector')
const expressLoader = require('./express');
const logger = require('./logger');

module.exports = async ({ expressApp }) => {
    await expressLoader({ app: expressApp });
    logger.info('Express Intialized');

    await dependencyInjectorLoader();
    logger.info('Dependency Injector Loaded');
}