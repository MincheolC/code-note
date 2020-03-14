const { Router } = require('express');
const middlewares = require('../middlewares');
const route = Router();

module.exports = app => {
    app.use('/accounts', route);

    route.get('/signin', (req, res) => {
        return res.json({ user: req.currentUser }).status(200);
    });

    route.get('/signup', (req, res) => {
        return res.json({ user: req.currentUser }).status(200);
    });
};
