const { Router } = require('express');
const middlewares = require('../middlewares');
const router = Router();

module.exports = app => {
    app.use('/users', router);

    router.get('/me', middlewares.decodeToken, middlewares.attachCurrentUser, (req, res) => {
        return res.json({ user: req.currentUser }).status(200);
    });
};
