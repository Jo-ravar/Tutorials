const mongoose = require('mongoose');
const User = require('../../app/models/users');

/**
 * This function will be used to add comapny user details
 * @param {object} userObj it contains user details
 * @param {function} callback conatins two parameter error and saved user 
 */
function addUserDetails(userObj, callback) {
  const newUser = new User({
    first_name: userObj.firstName,
    last_name: userObj.lastName,
    phone: userObj.phone,
    aadhar_id: userObj.aadhar,
  });

  newUser.save(function(errInSave, savedUser) {
    if (errInSave) {
      callback(errInSave);
    } else {
      callback(null, savedUser);
    }
  });
}

module.exports = {
  addUserDetails: addUserDetails,
};
