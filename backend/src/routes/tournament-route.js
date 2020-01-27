const router = require('express').Router();
const TournamentController = require('../controllers/tournament-controller');
const authentication = require('../middlewares/authentication-middleware');
const authorizeTournament = require('../middlewares/authorization-tournament-middleware');

router.route('/')
//GET api/tournament
  .get(TournamentController.index);

router.route('/create')
//POST api/tournament/create
  .post(authentication, TournamentController.create);

router.route('/user')
//GET api/tournament/user
  .get(authentication, TournamentController.listByUser);

router.route('/:id')
//GET api/tournament/:id
  .get(authentication, authorizeTournament, TournamentController.detailById)
  //DELETE api/tournament/:id
  .delete(authentication, TournamentController.destroy);


module.exports = router;
