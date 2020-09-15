const Yup = require('yup');

const numberSchema = Yup.number().min(1, 'too small').max(2, 'too big');
const stringSchema = Yup.string().max(2, 'too long').required('Required');
const objectSchema = Yup.object().shape({
    name: stringSchema,
    age: numberSchema,
});

function ValidateUser(user) {
    const UserSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        age: Yup.number().min(1, 'Too small').required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        phone: Yup.string().min(8, '-없이 입력').max(11, '-없이 입력').required('Required'),
    });
    try {
        const result = UserSchema.validateSync(user, { abortEarly: false });
        return result;
    } catch (err) {
        const { value, errors } = err;
        return Object.keys(value).reduce(
            (obj, key, index) => ({
                ...obj,
                [key]: errors[index],
            }),
            {},
        );
    }
}

const user1 = {
    name: 'test1',
    age: 23,
    email: 'test@g.net',
    phone: '01011112222',
};
const user2 = {
    age: -1,
    email: 'test',
    phone: '01011112222222',
};

console.log(ValidateUser(user1));
console.log(ValidateUser(user2));
