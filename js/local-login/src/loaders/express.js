module.exports = async ({ app }) => {
    app.get('/status', (req, res) => { res.status(200).end(); });
    app.get('/', (req, res) => res.send('Hello World!'));
    return app;
};
