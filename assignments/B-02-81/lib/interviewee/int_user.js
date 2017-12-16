const mongoose = require('mongoose');
const User = require('../../app/models/user');

/**
 * This function will be used to view user details by users
 * @param {object} userObj it contains user details
 * @param {function} callback conatins two parameter error and current user 
 */
function viewCurrentUser(callback){
  User.findOne({email:userObj.email},function(errInCall,currentUser){
    if(errInCall){
      callback(errInCall);
    }else{
      callback(null,currentUser);
    }
  });
}


module.exports = {
  viewCurrentUser: viewCurrentUser,
};
