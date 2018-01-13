const express = require('express');
const emailHandlerRoutes = require('./emailHandler');
const router = express.Router();

router.use('/send', emailHandlerRoutes);

module.exports = router;
