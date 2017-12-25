router.get('/login', function(req, res, next) {
    res.send('Go back and register!');
  });
  router.get('/auth/linkedin', passportLinkedIn.authenticate('linkedin'));
  const passportLinkedIn = require('./auth/linkedin');
  router.get('/auth/linkedin/callback',
    passportLinkedIn.authenticate('linkedin', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication
      res.json(req.user);
    });