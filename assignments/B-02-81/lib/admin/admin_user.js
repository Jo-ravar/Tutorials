const mongoose = require('mongoose');
const User = require('../../app/models/user');

/**
 * This function will be used to add user details by admin
 * @param {object} userObj it contains user details
 * @param {function} callback conatins two parameter error and saved user 
 */
function addUser(userObj, callback) {
  const newUser = new User({
    first_name: userObj.firstName,
    last_name: userObj.lastName,
    phone: userObj.phone,
    email: userObj.email,
    age: userObj.age,
  });

  newUser.save(function(errInSave, savedUser) {
    if (errInSave) {
      callback(errInSave);
    } else {
      callback(null, savedUser);
    }
  });
}

/**
 * This function will be used to add user details by admin
 * @param {function} callback conatins two parameter error and all user 
 */
function viewUser(callback){
  User.find({},function(errInCall,allUser){
    if(errInCall){
      callback(errInCall);
    }else{
      callback(null,allUser);
    }
  });
}

module.exports = {
  addUser: addUser,
  viewUser:viewUser,
};