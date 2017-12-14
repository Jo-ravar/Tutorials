const mongoose = require('mongoose');
const interviewee = require('../../app/models/interviewee');

/**
 * 
* @param {object} intervieweeObj it contains admin details 
 * @param {function} callback it contains two parameters - error and saved instance
 */
function addIntervieweeDetails(intervieweeObj, callback) {
    const newInterviewee = new interviewee({
        first_name: intervieweeObj.first_name,
        last_name: intervieweeObj.last_name,
        email: intervieweeObj.email,
        phone: intervieweeObj.phone,
        age: intervieweeObj.age,
    });
    newInterviewee.save(function(errInSave, savedInterviewee){
        if (errInSave) {
            callback(errInSave);
        } else {
            callback(null, savedInterviewee);
        }
    });
}

/**
 * 
 * @param {function} callback it contains two parameters - error and fetched instances 
 */
function viewAllInterviewees(callback) {
    interviewee.find({}, function(errInFetch, fetchedInstance){
        if(errInFetch){
            callback(errInFetch);
        }else {
            callback(null, fetchedInstance);
        }
    });
}

/**
 * 
 * @param {email} email it is the email entered by interviewee to login 
 * @param {function} callback it contains two parameters - error and fetched instance
 */
function findInterviewee(email, callback){
    interviewee.findOne({"email": email}, function(errInFetch, fetchedInstance){
        if(errInFetch){
            callback(errInFetch);
        }else {
            callback(null, fetchedInstance);
        }
    });
}

module.exports = {
    addIntervieweeDetails: addIntervieweeDetails,
    viewAllInterviewees: viewAllInterviewees,
    findInterviewee: findInterviewee,
};