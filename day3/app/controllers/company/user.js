/**
 * This will contain operations related to user model
 */
const express = require('express');
const router = express.Router();
const userLib = require('../../../lib/company/users');

/**
 * this function is used to get details
 * @param {request object} req it will be used to handle request
 * @param {response ibject} res it will be used to give response
 */
function getUserDetail(req, res) {
  const resObj = [
    {
      name: 'SAP LABS',
      aaddress: '123 Delhi',
    },
  ];
  res.status(200).json(resObj);
}

/**
 * this function is used to insert user
 * @param {request object} req it will be used to handle request
 * @param {response ibject} res it will be used to give response
 */
function addNewUser(req, res) {
  const userDetails = req.body;
  userLib.addUserDetails(userDetails, function(errInFetch, fetchedInstace) {
    if (errInFetch) {
      res.status(500).json(errInFetch);
    }
    res.status(200).json(fetchedInstace);
  });
}

router.get('/getDetail', getUserDetail);
router.post('/addUser', addNewUser);
module.exports = router;
