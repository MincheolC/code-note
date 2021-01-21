const redis = require('redis')
const express = require('express')
const session = require('express-session')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

const flash = require('connect-flash');
const RedisStore = require('connect-redis')(session);
const redisClient = redis.createClient();

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express()

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: new RedisStore({ client: redisClient }),
  cookie: {
    maxAge: 60000
  }
}))
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  console.log('serializeUser ', user);
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  console.log('deserializeUser ', user);
  done(null, user);
});

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'pwd',
}, function (username, password, done) {
  const tempAuth = {
    email: 'charles',
    password: '1234',
    name: 'charles',
  }

  if (username === tempAuth.email) {
    if (password === tempAuth.password) {
      return done(null, username);
    } else {
      return done(null, false);
    }
  } else {
    return done(null, false)
  }
}));

app.post('/login',
  passport.authenticate('local', { successRedirect: '/', failureRedirect: '/auth/login', failureFlash: 'Invalid username or password.' })
);

app.get('/', function (req, res, next) {
  console.log(req.session);
  if (!req.user) {
    return res.redirect('/auth/login');
  }
  req.session.num = !req.session.num ? 1 : req.session.num + 1;
  res.send(`
    <p>Hello Session ${req.session.num}</p>
    <a href='/auth/logout'>logout</a>
  `);
})

app.get('/auth/login', function (req, res, next) {
  if (req.user) {
    return res.redirect('/');
  }
  const { error } = req.flash();
  console.log()
  res.send(`
    <!doctype html>
    <html>
    <head>
      <meta charset="utf-8">
    </head>
    <body>
      <form action="/login" method="post">
        <p><input type="text" name="email" placeholder="email"></p>
        <p><input type="password" name="pwd" placeholder="password"></p>
        <p>
          <input type="submit" value="login">
        </p>
      </form>
      ${error ?? ''}
    </body>
    </html>
  `)
});

app.get('/auth/logout', function (req, res, next) {
  req.logout();
  req.session.destroy((err) => res.redirect('/'));
})

app.listen(5000, function() {
  console.log('Server is listening on 5000')
})