const express = require('express');
const router = express.Router();
const adminLib = require('../../../lib/admin/admin');

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
        } else {
            req.session.auth = {userId: adminDetails.email};
            res.status(200).json(fetchedInstance);
        }
    });
}

router.get('/', verifyAdmin);
module.exports = router;