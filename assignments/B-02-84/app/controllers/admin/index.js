const express = require('express');

const adminRoutes = require('./user');
const loginRoutes = require('./login');
const registerRoutes = require('./register');

const router = express.Router();

router.use('/user', adminRoutes);
router.use('/login', loginRoutes);
router.use('/register', registerRoutes);

module.exports = router;