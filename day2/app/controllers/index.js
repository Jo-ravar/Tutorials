const express = require('express');
const companyRoutes = require('./company');

const router = express.Router();

router.use('/company', companyRoutes);

module.exports = router;
