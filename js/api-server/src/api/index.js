// const { Router } = require('express');
const { Router } = require('express');
const auth = require('./routes/auth');
const user = require('./routes/user');

// guaranteed to get dependencies
module.exports = () => {
	const subApp = Router();
    auth(subApp);
    user(subApp);
	return subApp;
}
