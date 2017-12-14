const express = require('express');

const userRoutes = require('./viewuser');

const router = express.Router();

router.use('/viewdetails', userRoutes);

module.exports = router;