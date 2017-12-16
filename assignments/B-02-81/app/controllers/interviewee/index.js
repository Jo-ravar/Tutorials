const express = require('express');
const userRoutes = require('./int_user');

const router = express.Router();
router.use('/int_user', userRoutes);
module.exports = router;