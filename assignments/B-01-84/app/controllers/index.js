const express = require('express');

const registerRoutes = require('./register');
const loginRoutes = require('./login');

const router = express.Router();

router.use('/register', registerRoutes);
router.use('/login', loginRoutes);

module.exports = router;