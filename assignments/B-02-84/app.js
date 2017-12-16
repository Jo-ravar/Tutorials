/**
 * this is our first file which interact with server
 * all database connectivity is done here
 * 
 */
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const routes = require('./app/controllers');
const db_connect = require('./lib/db_connect')();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 3000);

router.use(session({
    secret: 'askdaskdjfbjshbdjnksd',
    resave: false,
    saveUninitialized: true,
}));

app.use('/', routes);

app.listen(app.get('port'), function(err){
    if(!err){
        console.log('server started at port 3000!!');
    }
});