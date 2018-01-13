const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const passport = require('passport');

const routes = require('./app/controllers');
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

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
app.use('/', routes);

app.get('/', function(req, res) {
  res.render('email');
});

app.listen(app.get('port'), function(err) {
  if (!err) {
    console.log('server started at port 3000!!');
  }
});
