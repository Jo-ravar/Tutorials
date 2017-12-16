const express = require('express');
const userRoutes = require('./admin_user');

const router = express.Router();
router.use('/admin_user', userRoutes);
module.exports = router;
