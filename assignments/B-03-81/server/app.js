/**
 * this is our first file which interact with server
 * all database connectivity is done here
 * 
 */
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const app = express();
const routes = require('./auth/init');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/passport-social-auth');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 3000);
app.use('/', routes);
app.use(session({
    secret: 'sakshikale',
    resave: true,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());

app.listen(app.get('port'), function(err) {
  if (!err) {
    console.log('server started at port 3000');
  }
});
