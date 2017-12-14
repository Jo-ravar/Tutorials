const express = require('express');
const session = require('express-session');
const router = express.Router();
const intervieweeLib = require('../../../lib/interviewee/interviewee');

/**
 * 
 * @param {req object} it will carry details of interviewee to save to the database 
 * @param {res object} will retrieve the fetched instance or error instance 
 */
function addUser(req, res){
    const userDetails = req.body;
    intervieweeLib.addIntervieweeDetails(userDetails, function(errInFetch, fetchedInstance){
        if(errInFetch){
            res.status(500).json(errInFetch);
        }
        res.status(200).json(fetchedInstance);
    });
}

/**
 * 
 * @param {} Request is sent to databasre for objects ti be retrieved 
 * @param {object} it will return all instances present in interviewee database 
 */
function viewUser(req, res){
    intervieweeLib.viewAllInterviewees(function(errInFetch, fetchedInstance){
        if(errInFetch){
            res.status(500).json(errInFetch);
        }
        res.status(200).json(fetchedInstance);
    });
}

router.post('/adduser', addUser);
router.get('/viewuser', viewUser);
module.exports = router;