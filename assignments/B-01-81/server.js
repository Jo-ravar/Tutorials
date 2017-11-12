const express		=	require('express');
const session		=	require('express-session');
const bodyParser  	= 	require('body-parser');
const app			=	express();

app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));
app.set('port', process.env.PORT || 3000);


app.use(session({
    secret: 'sakshi',
    resave: false,
    saveUninitialized: true,
}));

var sess;
app.get('/',function(req,res){
	
	sess=req.session;
	if(sess.user)
	{
		res.redirect('/login');
	}
	else{
	res.redirect('/register');
	}
});
app.get('/register',function(req,res){
	const resObj=[
		{
			user:'sakshi',
			pwd: '1234'
	},];
	res.status(200).json(resObj);
});

app.post('/login',function(req,res){
	
	let user = req.body.user;
    let pwd = req.body.pwd;
    if(user === 'sakshi')
    {
        req.session.auth = {user: user};
        let resObj = {msg: 'done'};
		res.status(200).json(resObj.msg.toString());
		res.send('Your username was ' + user + ' and password was ' + pwd);
	 } else
{
	let resObj = {msg: 'Username/password is  invalid'};
	res.status(403).json(resObj.msg.toString());
}
});
app.get('/checklogin',function(req, res){
    if(req.session.auth.userId)
    {
        let resObj = {msg: 'You logged in as '};
        res.status(200).json(resObj.msg.toString() + req.session.auth.userId.toString());
    }
});



app.get('/logout',function(req,res){
	
	req.session.destroy(function(err){
		if(err){
			console.log(err);
		}
		else
		{
			res.redirect('/');
		}
	});

});
app.listen(3000,function(){
	console.log("App Started on PORT 3000");
});

