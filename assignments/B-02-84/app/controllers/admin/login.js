const express = require('express');
const router = express.Router();
const session = require('express-session');
const adminLib = require('../../../lib/admin/admin');

router.use(session({
    secret: 'askdaskdjfbjshbdjnksd',
    resave: false,
    saveUninitialized: true,
}));

/**
 * 
 * @param {object} adminDetails it contains Admins details 
 * @param {function} function it contains two parameters error and fetched Instance 
 */
function verifyAdmin(req, res){
    const adminDetails = req.body;
    adminLib.findAdminDetails(adminDetails, function(errInFetch, fetchedInstance){
        if(errInFetch){
            res.status(500).json(errInFetch);
            let resObj = {msg: 'Username/password is  invalid'};
            res.status(403).json(resObj.msg.toString());
        } else {
            req.session.auth = {userId: adminDetails.email};
            res.status(200).json(fetchedInstance);
        }
    });
}

router.get('/', verifyAdmin);
module.exports = router;