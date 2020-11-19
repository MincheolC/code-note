const Joi = require('@hapi/joi');

const usernameSchema = Joi.string().alphanum().min(3).max(30).required();
const passwordSchema = Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'));
const emailSchema = Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } });

const isValidUsername = (value) => usernameSchema.validate(value);
const isValidPassword = (value) => passwordSchema.validate(value);
const isValidEmail = (value) => emailSchema.validate(value);

module.exports = {
    isValidUsername,
    isValidPassword,
    isValidEmail,
}

