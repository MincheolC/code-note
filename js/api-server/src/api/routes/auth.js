const { Router } = require('express');
const middlewares = require('../middlewares');
const { celebrate, Joi, Segments } = require('celebrate');
const { Container } = require('typedi');

const router = Router();

module.exports = app => {
    app.use('/auth', router);

    router.post(
        '/signin',
        celebrate({
            [Segments.BODY]: Joi.object().keys({
                email: Joi.string()
                    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
                    .required(),
                password: Joi.string()
                    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
                    .required(),
            }),
        }),
        async (req, res, next) => {
            const logger = Container.get('logger');
            logger.debug(`Calling Sign-In endpoint with body: ${JSON.stringify(req.body)}`);
            try {
                const authServiceInstance = Container.get('authService');
                const { user, token } = await authServiceInstance.signIn(req.body);
                return res.status(200).json({ user, token });
            } catch (e) {
                logger.error(`error: ${JSON.stringify(e)}`);
                return next(e);
            }
        },
    );

    router.post(
        '/signup',
        celebrate({
            [Segments.BODY]: Joi.object().keys({
                name: Joi.string().required(),
                email: Joi.string()
                    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
                    .required(),
                password: Joi.string()
                    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
                    .required(),
                repeat_password: Joi.ref('password'),
            }),
        }),
        async (req, res, next) => {
            const logger = Container.get('logger');
            logger.debug(`Calling Sign-Up endpoint with body: ${JSON.stringify(req.body)}`);
            try {
                const authServiceInstance = Container.get('authService');
                const { user, token } = await authServiceInstance.signUp(req.body);
                return res.status(201).json({ user, token });
            } catch (e) {
                logger.error(`error: ${JSON.stringify(e)}`);
                return next(e);
            }
        },
    );

    router.post('/signout', middlewares.decodeToken, (req, res, next) => {
        const logger = Container.get('logger');
        logger.debug(`Calling Sign-Out endpoint with body: ${JSON.stringify(req.body)}`);
        try {
            /**
             *  @TODO AuthService.Logout(req.user) do some clever stuff
             */
            return res.status(200).end();
        } catch (e) {
            logger.error('🔥 error %o', e);
            return next(e);
        }
    });
};
