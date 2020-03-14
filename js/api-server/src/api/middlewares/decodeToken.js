const { Container } = require('typedi');
const jwt = require('jsonwebtoken');
const config = require('../../config');

/**
 * We are assuming that the JWT will come in a header with the form
 *
 * Authorization: Bearer ${JWT}
 *
 * But it could come in a query parameter with the name that you want like
 * GET https://my-bulletproof-api.com/stats?apiKey=${JWT}
 * Luckily this API follow _common sense_ ergo a _good design_ and don't allow that ugly stuff
 */
const getTokenFromHeader = async (req) => {
    /**
     * @TODO Edge and Internet Explorer do some weird things with the headers
     * So I believe that this should handle more 'edge' cases ;)
     */
    if (
        (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token') ||
        (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer')
    ) {
        return req.headers.authorization.split(' ')[1];
    }
    return null;
};

const decodeToken = async (req, res, next) => {
    const logger = Container.get('logger');
    const errors = Container.get('errors');
    const token = await getTokenFromHeader(req);
    if (!token) {
        return next(errors.Unauthorized())
    }
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
            return next(errors.Unauthorized());
        }
        logger.debug(`Decoded Token ${JSON.stringify(decoded)}`);
        req.token = decoded;
        return next();
    });
};

module.exports = decodeToken;
