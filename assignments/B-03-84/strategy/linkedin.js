const mongoose = require('mongoose');
const LinkedInStrategy = require('passport-linkedin').Strategy;

const User = require('../models/user');

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use(
    new LinkedInStrategy(
      {
        consumerKey: '817tgjc7u2ew4z',
        consumerSecret: 'Z1fv8DMtkoSoNQnd',
        callbackURL: 'http://localhost:3000/auth/linkedin/callback',
        profileFields: ['id', 'email-address', 'first-name', 'last-name'],
      },
      function(token, tokenSecret, profile, done) {
        process.nextTick(function() {
          User.findOne({ 'linkedin.id': profile.id }, function(err, user) {
            if (err) return done(err);
            if (user) return done(null, user);
            else {
              let newUser = new User({
                'linkedin.id': profile.id,
                'linkedin.token': token,
                'linkedin.email': profile.emails[0].value,
                'linkedin.name':
                  profile.name.givenName + ' ' + profile.name.familyName,
              });

              newUser.save(function(err) {
                if (err) throw err;
                return done(null, newUser);
              });
              console.log(profile);
            }
          });
        });
      }
    )
  );
};
