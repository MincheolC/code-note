const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const argon2 = require('argon2');
const config = require('../config');
const { Container } = require('typedi');

function generateToken(user) {
    const logger = Container.get('logger');
    const today = new Date();
    const exp = new Date(today);
    // exp.setDate(today.getDate() + 60);
    exp.setHours(today.getHours() + 8);
    /**
     * A JWT means JSON Web Token, so basically it's a json that is _hashed_ into a string
     * The cool thing is that you can add custom properties a.k.a metadata
     * Here we are adding the userId and email
     * Beware that the metadata is public and can be decoded without _the secret_
     * but the client cannot craft a JWT to fake a userId
     * because it doesn't have _the secret_ to sign it
     * more information here: https://softwareontheroad.com/you-dont-need-passport
     */
    logger.silly(`Sign JWT for userId: ${user._id} expiredAt: ${exp.getTime()}`);
    return jwt.sign(
        {
            _id: user._id, // We are gonna use this in the middleware 'isAuth'
            email: user.email,
            exp: exp.getTime() / 1000,
        },
        config.jwtSecret,
    );
}

/**
 * @TODO User 정보는 Mysql에 저장하도록 변경. 중복 및 관계 정리가 쉬움
 */

class AuthService {
    constructor() {
        this.userModel = Container.get('userModel');
        this.logger = Container.get('logger');
    }

    async signUp({ name, email, password }) {
        const salt = randomBytes(32);
        this.logger.silly('Hashing password');

        const hashedPassword = await argon2.hash(password, { salt });
        this.logger.silly('Creating user db record');
        const userRecord = await this.userModel.create({
            name,
            email,
            salt: salt.toString('hex'),
            password: hashedPassword,
        });

        this.logger.silly('Generating JWT');
        const token = generateToken(userRecord);

        if (!userRecord) {
            throw new Error('User cannot be created');
        }

        const user = userRecord.toObject();
        Reflect.deleteProperty(user, 'password');
        Reflect.deleteProperty(user, 'salt');

        return { user, token };
    }

    async signIn({ email, password }) {
        const userRecord = await this.userModel.findOne({ email });
        if (!userRecord) {
            throw new Error('User not registered');
        }

        /**
         * We use verify from argon2 to prevent 'timing based' attacks
         */
        this.logger.silly('Checking password');
        const validPassword = await argon2.verify(userRecord.password, password);
        if (validPassword) {
            this.logger.silly('Password is valid!');
            this.logger.silly('Generating JWT');
            const token = generateToken(userRecord);

            const user = userRecord.toObject();
            Reflect.deleteProperty(user, 'password');
            Reflect.deleteProperty(user, 'salt');

            return { user, token };
        } else {
            throw new Error('Invalid Password');
        }
    }
}

module.exports = AuthService;
