/**
 * This is our main file
 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 3000);

app.get('/user', function(req, res) {
  const responseObject = {
    name: 'sakshi',
    age: 25,
  };
  res.send(responseObject);
});

app.post('/login', function(req, res) {
  const userName = req.body.username;
  const password = req.body.password;
  res.send('Your username was ' + userName + ' and password was ' + password);
});

app.listen(app.get('port'), function(err) {
  if (!err) {
    console.log('server started at port 3000');
  }
});
