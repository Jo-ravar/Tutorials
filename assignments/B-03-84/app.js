const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');
const passport = require('passport');
const db_connect = require('./lib/db_connect')();
const routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 3000);

app.use(
  session({
    secret: 'anystringoftext',
    saveUninitialized: true,
    resave: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
require('./strategy/linkedin')(passport);
require('./routes')(app, passport);

app.use('/', routes);

app.listen(app.get('port'), function(err) {
  if (!err) {
    console.log('server started at port 3000!!');
  }
});
