module.exports = function(app, passport) {
  app.get('/login', function(req, res) {
    res.status(200).json('Cooooooooooooolll  !!!!!!!!!!!!!');
  });

  app.get(
    '/auth/linkedin',
    passport.authenticate('linkedin', {
      scope: ['r_basicprofile', 'r_emailaddress'],
    })
  );

  app.get(
    '/auth/linkedin/callback',
    passport.authenticate('linkedin', { failureRedirect: '/' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/login');
    }
  );
};
