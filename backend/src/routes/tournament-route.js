const router = require('express').Router();
const TournamentController = require('../controllers/tournament-controller');
const authentication = require('../middlewares/authentication-middleware');

router.route('/')
//GET api/tournament
  .get(TournamentController.index);

router.route('/user')
//GET api/tournament/user
  .get(authentication,TournamentController.listByUser);

module.exports = router;
