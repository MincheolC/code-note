const express = require('express');
const routes = require('../api');
const config = require('../config');
const { errors } = require('celebrate');

module.exports = async ({ app }) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use(config.api.prefix, routes(app));

    // error handlers (next 필수)
    // eslint-disable-next-line no-unused-vars
    app.use((err, req, res, next) => {
        res.status(err.statusCode || 500).send(err);
    });
    app.use(errors());
    return app;
};
