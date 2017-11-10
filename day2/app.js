/**
 * this is our first file which interact with server
 * all database connectivity is done here
 * 
 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./app/controllers');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 3000);
app.use('/', routes);

app.listen(app.get('port'), function(err) {
  if (!err) {
    console.log('server started at port 3000');
  }
});
