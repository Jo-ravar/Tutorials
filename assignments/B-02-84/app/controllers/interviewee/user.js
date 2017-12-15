const express = require('express');
const router = express.Router();
const session = require('express-session');
const intervieweeLib = require('../../../lib/interviewee/interviewee');
/*
router.use(session({
    secret: 'askdjnksd',
    resave: false,
    saveUninitialized: true,
}));
*/
/**
 * 
 * @param {email} email it is the email entered by interviewee to login  
 * @param {function} function it contains two parameters error instance and fetched instance
 */
function login(req, res){
    let email = req.body.email;
    intervieweeLib.findinterviewee(email, function(errInFetch, fetchedInstance){
        if(errInFetch){
            res.status(500).json(errInFetch);
            let resObj = {msg: 'Username/password is  invalid'};
            res.status(403).json(resObj.msg.toString());
        } else {
            req.session.auth = {userId: email};
            res.status(200).json(fetchedInstance);
        }
    });
}

router.post('/', login);
module.exports = router;