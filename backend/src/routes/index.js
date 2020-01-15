const express = require('express');
const usersRoutes = require('./users.route');
const authRoutes = require('./auth.route');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', usersRoutes);

module.exports = router;
