const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
//const path = require('path');
//const routes = require('./app/controllers');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 3000);
//app.use(express.static(path.join(__dirname, 'public')));


//app.use('/', routes);

app.use(session({
    secret: 'sdfascef' , 
    resave: false ,
    saveUninitialized: true,
}));

app.get('/inputDetails/:user', function (req, res) {
    req.session.name = req.params.user;
    res.send('<p>See session : <a href = "/printDetails">View Here</a>');
});


app.get('/printDetails', function (req, res){
        res.send('email : '+ req.session.name);
});

app.listen(app.get('port'), function(err){
    if(!err){
        console.log('server started at port 3000!!');
    }
});