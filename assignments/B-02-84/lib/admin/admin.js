const mongoose = require('mongoose');
const admin = require('../../app/models/admin');

/**
 * 
 * @param {object} adminObj it contains admin details 
 * @param {function} callback it contains two parameters - error and saved instance
 */
function addAdminDetails(adminObj, callback) {
    const newAdmin = new admin({
        email: adminObj.email,
        username: adminObj.username, 
    });

    newAdmin.save(function(errInSave, savedAdmin) {
        if(errInSave) {
            callback(errInSave);
        } else {
            callback(null, savedAdmin);
        }
    });
}

/**
 * 
 * @param {object} adminObj it contains admin details
 * @param {function} callback it contains two parameters - error and fetched instance
 */
function findAdminDetails(adminObj, callback) {
    admin.findOne({ "email": adminObj.email, "username": adminObj.username}, function(errInFetch, fetchedInstance){
        if(errInFetch){
            callback(errInFetch);
        }else {
            callback(null, fetchedInstance);
        }
    });
}

module.exports = {
    addAdminDetails: addAdminDetails,
    findAdminDetails: findAdminDetails,
};