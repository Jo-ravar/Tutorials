const express = require('express');
const router = express.Router();

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

router.get('/getDetail', getUserDetail);
module.exports = router;
