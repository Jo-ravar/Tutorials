const LinkedInStrategy = require('passport-linkedin').Strategy;

const User = require('../models/user');

module.exports = function(passport){
    
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
       
    passport.deserializeUser(function(id, done) {
        User.findById(id, function (err, user) {
          done(err, user);
        });
    });

    passport.use(new LinkedInStrategy({
            'consumerKey': '817tgjc7u2ew4z',
            'consumerSecret': 'Z1fv8DMtkoSoNQnd',
            'callbackURL': "http://localhost:3000/auth/linkedin/callback"
        },
        function(token, tokenSecret, profile, done) {
            process.nextTick(function(){
                User.findOne({'facebook.id': profile.id}, function(err, user){
                    if(err)
                        return done(err);
                    if(user)
                        return done(null, user);
                    else 
                    {
                        var newUser = new User();
                        newUser.linkedin.id = profile.id;
                        newUser.linkedin.token = token;
                        newUser.linkedin.email = profile.email-address; 
                        newUser.linkedin.name = profile.first-name + ' ' + profile.last-name;
                        newUser.linkedin.dob = profile. date-of-birth;
                        newUser.linkedin.summary = profile.summary;
                        newUser.linkedin.industry = profile.industry.Codes;
                        newUser.linkedin.position.id = profile.position.id;
                        newUser.linkedin.position.title = profile.position.title; 
                        newUser.linkedin.position.summary = profile.position.summary;
                        newUser.linkedin.position.start_date = profile.position.start-date;
                        newUser.linkedin.position.end_date = profile.position.end-date;
                        newUser.linkedin.position.is_current = profile.position.is-current;
                        newUser.linkedin.position.company.id = profile.position.company.id;
                        newUser.linkedin.position.company.name = profile.position.company.name;
                        newUser.linkedin.picture_url = profile.picture-url;
                        newUser.linkedin.public_profile_linkedin_url = profile.public-profile-url;
                        newUser.linkedin.associations = profile.associations;
                        newUser.linkedin.interests = profile.interests;
                        newUser.linkedin.publications.id = profile.publications.id;
                        newUser.linkedin.publications.title = profile.publications.title;
                        newUser.linkedin.publications.date = profile.publications.date;
                        newUser.linkedin.publications.url = profile.publications.url;
                        newUser.linkedin.patents.id = profile.patents.id;
                        newUser.linkedin.patents.title = profile.patents.title;
                        newUser.linkedin.patents.summary = profile.patents.summary;
                        newUser.linkedin.patents.number = profile.patents.number;
                        newUser.linkedin.patents.status.id = profile.patents.status.id;
                        newUser.linkedin.patents.status.name = profile.patents.status.name;
                        newUser.linkedin.patents.date = profile.patents.date;
                        newUser.linkedin.patents.url = profile.patents.url;
                        newUser.linkedin.language.id = profile.languages.id;
                        newUser.linkedin.language.name = profile.languages.language.name;
                        newUser.linkedin.language.proficiency = profile.languages.proficiency.level;
                        newUser.linkedin.skills.id = profile.skills.id;
                        newUser.linkedin.skills.name = profile.skills.skill.name;
                        newUser.linkedin.certifications.id = profile.certifications.id;
                        newUser.linkedin.certifications.name = profile.certifications.name;
                        newUser.linkedin.certifications.authority = profile.certifications.authority.name;
                        newUser.linkedin.certifications.number = profile.certifications.number;
                        newUser.linkedin.certifications.start_date = profile.certifications.start-date;
                        newUser.linkedin.certifications.end_date = profile.certifications.end-date;
                        newUser.linkedin.educations.id = profile.educations.id;
                        newUser.linkedin.educations.school_name = profile.educations.school-name; 
                        newUser.linkedin.educations.field_of_study = profile.educations.field-of-study; 
                        newUser.linkedin.educations.start_date = profile.educations.start-date;
                        newUser.linkedin.educations.end_date = profile.educations.end-date;
                        newUser.linkedin.educations.degree = profile.educations.degree;
                        newUser.linkedin.courses.id = profile.courses.id;
                        newUser.linkedin.courses.name = profile.courses.name;
                        newUser.linkedin.courses.number = profile.courses.number;

                        newUser.save(function(err){
                            if(err)
                                throw err;
                            return done(null, newUser);
                        })
                        console.log(profile);
                    }
                });
            });
        }
    ));
};