const { Container } = require('typedi');
const loaders = require('./loaders');
const express = require('express');
const config = require('./config');
const port = config.port;

async function startServer() {
    const app = express();
    await loaders({ expressApp: app });

    const logger = Container.get('logger');
    app.listen(port, err => {
        if (err) {
            console.log(err);
            return;
        }
        logger.info(`Your server is ready on port ${port}`);
    });
}

startServer();
