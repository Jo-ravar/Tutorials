/**
 * This will contain operations related to user model
 */
const express = require('express');
const router = express.Router();
const int_userLib = require('../../../lib/interviewee/int_user');

/**
 * this function is used to view current user
 * @param {request object} req it will be used to handle request
 * @param {response ibject} res it will be used to give response
 */

function viewCurrentUser(req , res){
  const userDetails = req.body;
  int_userLib.viewCurrentUser(userDetails, function(errInFetch, fetchedInstace) {
    if (errInFetch) {
      res.status(500).json(errInFetch);
    }
    res.status(200).json(fetchedInstace);
  });
}

router.get('/user',viewCurrentUser);
module.exports = router;