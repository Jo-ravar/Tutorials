const User = require('../models/user');

module.exports = function(app, passport) {   
    app.get('/auth/linkedin', passport.authenticate('linkedin'));

    app.get('/auth/linkedin/callback', 
    passport.authenticate('linkedin', { failureRedirect: '/user/login' }),
    function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
    });
};