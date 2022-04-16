import express from 'express';

const app = express();

const start = async () => {
    try {
        await app.listen(PORT);
        console.log(`🚀  GraphQL server running at port: ${PORT}`);
    } catch {
        console.log('Not able to run GraphQL server');
    }
};

start();