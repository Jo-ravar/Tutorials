const mongoose = require('mongoose');
const user = require('../../models/user');

function findUser(email, callback){
    user.findOne({"email": email}, function(errInFetch, fetchedInstance){
        if(errInFetch){
            callback(errInFetch);
        }else {
            callback(null, fetchedInstance);
        }
    });
}

module.exports = {
    findUser: findUser,
};
