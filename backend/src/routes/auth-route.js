const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth-controller');

router.route('/login')
  //POST /api/auth/login
  .post(AuthController.login);

module.exports = router;
