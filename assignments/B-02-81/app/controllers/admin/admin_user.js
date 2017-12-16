/**
 * This will contain operations related to user model
 */
const express = require('express');
const router = express.Router();
const admin_userLib = require('../../../lib/admin/admin_user');


/**
 * this function is used to insert new user
 * @param {request object} req it will be used to handle request
 * @param {response ibject} res it will be used to give response
 */
function addNewUser(req, res) {
  const userDetails = req.body;
  admin_userLib.addUser(userDetails, function(errInFetch, fetchedInstace) {
    if (errInFetch) {
      res.status(500).json(errInFetch);
    }
    res.status(200).json(fetchedInstace);
  });
}
function viewUser(req , res){
  const userDetails = req.body;
  admin_userLib.viewUser(userDetails, function(errInFetch, fetchedInstace) {
    if (errInFetch) {
      res.status(500).json(errInFetch);
    }
    res.status(200).json(fetchedInstace);
  });
}
router.post('/add', addNewUser);
router.get('/user',viewUser);
module.exports = router;
