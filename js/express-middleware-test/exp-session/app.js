const redis = require('redis')
const express = require('express')
const session = require('express-session')

const RedisStore = require('connect-redis')(session);
const redisClient = redis.createClient();

const app = express()

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: new RedisStore({ client: redisClient }),
}))

app.get('/', function (req, res, next) {
  console.log(req.session);
  req.session.num = !req.session.num ? 1 : req.session.num + 1;
  res.send(`Hello Session ${req.session.num}`)
})

app.listen(5000, function() {
  console.log('Server is listening on 5000')
})