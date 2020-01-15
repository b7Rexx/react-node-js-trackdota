const express = require('express');
const usersRoutes = require('./users.route');
const authRoutes = require('./auth.route');

const authentication = require('./../middlewares/authentication.middleware');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', authentication, usersRoutes);
// router.use('/tournaments', authentication, tournamentsRoutes);

module.exports = router;
