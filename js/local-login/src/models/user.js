const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    localPassword: String,
    fbToken: String,
    jsonWebToken: String,
});

module.exports = mongoose.model('user', userSchema);
