const express = require('express');
const userRoutes = require('./user--route');
const authRoutes = require('./auth-route');
const gameRoutes = require('./game-route');
const tournamentRoutes = require('./tournament-route');

const authentication = require('../middlewares/authentication-middleware');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', authentication, userRoutes);
router.use('/game', gameRoutes);
router.use('/tournament', tournamentRoutes);

module.exports = router;
