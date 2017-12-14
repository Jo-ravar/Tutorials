const express = require('express');
const router = express.Router();
const adminlib = require('../../../lib/admin/admin');

/**
 * this function is used to insert user
 * @param {request object} req it will carry the details of admin to save to database
 * @param {response object} res it will return the fetched instance or the error instance during adding the details
 */
function addAdminDetails(req, res) {
    const adminDetails = req.body;
    adminlib.addAdminDetails(adminDetails, function(errInFetch, fetchedInstace) {
        if (errInFetch) {
        res.status(500).json(errInFetch);
        }
        res.status(200).json(fetchedInstace);
    });
}
  
router.post('/register', addAdminDetails);
module.exports = router;