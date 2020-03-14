const { Container } = require('typedi');

/**
 * Attach user to req.user
 * @param {*} req Express req Object
 * @param {*} res  Express res Object
 * @param {*} next  Express next Function
 */
const attachCurrentUser = async (req, res, next) => {
    const logger = Container.get('logger');
    try {
        const UserModel = Container.get('userModel');
        const userRecord = await UserModel.findById(req.token._id);
        if (!userRecord) {
            return next(401);
        }
        const currentUser = userRecord.toObject();
        Reflect.deleteProperty(currentUser, 'password');
        Reflect.deleteProperty(currentUser, 'salt');

        req.currentUser = currentUser;
        return next();
    } catch (e) {
        logger.error(`🔥 Error attaching user to req: ${JSON.stringify(e)}`);
        return next(e);
    }
};

module.exports = attachCurrentUser;
