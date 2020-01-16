const router = require('express').Router();
const GameController = require('./../controllers/game.controller');

router.route('/')
//GET api/users
  .get(GameController.index);

module.exports = router;
