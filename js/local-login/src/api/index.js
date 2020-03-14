const { Router } = require('express');
const auth = require('./routes/auth');

// guaranteed to get dependencies
module.exports = () => {
	const app = Router();
	auth(app);
	return app
}