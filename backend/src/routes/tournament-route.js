const router = require('express').Router();
const TournamentController = require('../controllers/tournament-controller');

router.route('/')
//GET api/users
  .get(TournamentController.index);

module.exports = router;
