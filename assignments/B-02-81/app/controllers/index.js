const express = require('express');
const adminRoutes = require('./admin');
const intervieweeRoutes= require('./interviewee')

const router = express.Router();

router.use('/admin', adminRoutes);
router.use('/interviewee',intervieweeRoutes);

module.exports = router;
