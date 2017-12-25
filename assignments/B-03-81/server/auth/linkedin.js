const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin');

const User = require('../models/user');
const config = require('../config');
const init = require('./init');

passport.use(new LinkedInStrategy({
    consumerKey: config.linkedin.clientID,
    consumerSecret: config.linkedin.clientSecret,
    callbackURL: config.linkedin.callbackURL
  },
  // linkedin sends back the tokens and profile info
  function(token, tokenSecret, profile, done) {

    const searchQuery = {
      name: profile.displayName
    };

    const updates = {
      name: profile.displayName,
      someID: profile.id
    };

    const options = {
      upsert: true
    };

    // update the user if s/he exists or add a new user
    User.findOneAndUpdate(searchQuery, updates, options, function(err, user) {
      if(err) {
        return done(err);
      } else {
        return done(null, user);
      }
    });
  }

));

// serialize user into the session
init();


module.exports = passport;