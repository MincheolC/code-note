const { Container } = require('typedi');
const logger = require('./logger');

module.exports = () => {
    try {
        Container.set('logger', logger);
    } catch (e) {
        logger.error(`🔥 Error on dependency injector loader: ${e}`);
        throw e;
    }
};
