const { Container } = require('typedi');
const AuthService = require('../services/auth');
// const agendaFactory = require('./agenda');
const logger = require('./logger');
const { errors } = require('../utils');

module.exports = ({ mongoConnection, models }) => {
    try {
        models.forEach(m => {
            Container.set(m.name, m.model);
        });

        /**
         * @TODO agenda only support for mongo v3. so this should be updated if agenda support v4.
         */
        // const agendaInstance = agendaFactory({ mongoConnection });
        // Container.set('agendaInstance', agendaInstance);
        Container.set('logger', logger);
        Container.set('errors', errors);
        Container.set('authService', new AuthService());
        // logger.info('Agenda injected into container');

        // return { agenda: agendaInstance };
    } catch (e) {
        logger.error(`🔥 Error on dependency injector loader: ${e}`);
        throw e;
    }
};
