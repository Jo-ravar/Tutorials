const express = require('express');
const session = require('express-session');
const router = express.Router();

/**
 * Session is being created with a secret key value and
 * initialized resave and saveinitialized parameters also
 */
router.use(session({
    secret: 'askdjnksd',
    resave: false,
    saveUninitialized: true,
}));

/**
 * 
 * @param {username, password} req is taken to be saved in session 
 * @param { } res is printed as a done string if the username matches
 *              otherwise error 403 is obtained as status
 */
function doLogin(req, res){
    let userName = req.body.username;
    let password = req.body.password;
    if(userName === 'sanyog96')
    {
        req.session.auth = {userId: userName};
        let resObj = {msg: 'done'};
        res.status(200).json(resObj.msg.toString());
    }
    else
    {
        let resObj = {msg: 'Username/password is  invalid'};
        res.status(403).json(resObj.msg.toString());
    }
}
router.post('/dologin', doLogin);

/**
 * 
 * @param { } req holds the session parmaters and 
 * @param {*} res prints string output that shows which user is logged in 
 */
function checkLogin(req, res){
    if(req.session.auth.userId)
    {
        let resObj = {msg: 'You logged in as '};
        res.status(200).json(resObj.msg.toString() + req.session.auth.userId.toString());
    }
}
router.get('/checklogin', checkLogin);

module.exports = router;