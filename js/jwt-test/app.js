const express = require('express');
const routes = require('./routes');
const cookieParser = require('cookie-parser')

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/', routes);

app.listen(port, () => console.log(`App is listening on ${port}`));