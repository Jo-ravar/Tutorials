const express = require('express');
const router = express.Router();
const userLib = require('../lib/user/user');

function login(req, res){
    let email = req.body.email;
    userLib.findUser(email, function(errInFetch, fetchedInstance){
        if(errInFetch){
            res.status(500).json(errInFetch);
        } else {
            res.status(200).json(fetchedInstance);
        }
    });
}

router.use('/login', login);

module.exports = router;