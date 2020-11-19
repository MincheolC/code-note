const { isValidUsername, isValidPassword, isValidEmail } = require('../joi');

describe('isValidUsername', () => {
    test('string() - [ValidationError: "value" must be a string]', () => {
        const { error } = isValidUsername(1);
        expect(error).not.toBe(null);
    });

    test('min(3) - [ValidationError: "value" length must be at least 3 characters long]', () => {
        const { error } = isValidUsername('1');
        expect(error).not.toBe(null);
    });

    test('max(30) - [ValidationError: "value" length must be less than or equal to 30 characters long]', () => {
        const { error } = isValidUsername('1234567890123456789012345678901234567890');
        expect(error).not.toBe(null);
    });

    test('valid value', () => {
        const { value } = isValidUsername('mincheol');
        expect(value).toBe('mincheol');
    });
});

describe('isValidPassword', () => {
    test('string() - [ValidationError: "value" must be a string]', () => {
        const { error } = isValidPassword(1);
        expect(error).not.toBe(null);
    });

    test('pattern() - [ValidationError: "value" with value fails to match the required pattern: /^[a-zA-Z0-9]{3,30}$/]', () => {
        const { error } = isValidPassword('!');
        expect(error).not.toBe(null);
    });

    test('valid value', () => {
        const { value } = isValidPassword('1234');
        expect(value).toBe('1234');
    });
});

describe('isValidEmail', () => {
    test('string() - [ValidationError: "value" must be a string]', () => {
        const { error } = isValidEmail(1);
        expect(error).not.toBe(null);
    });

    test('email() - [ValidationError: "value" must be a valid email]', () => {
        const { error } = isValidEmail('m@m');
        expect(error).not.toBe(null);
    });

    test('valid value [.com, .net]', () => {
        const { value } = isValidEmail('mccha47@gmail.com');
        expect(value).toBe('mccha47@gmail.com');
    });
});
