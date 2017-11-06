const express = require('express');
const userRoutes = require('./user');

const router = express.Router();
router.use('/user', userRoutes);
module.exports = router;
