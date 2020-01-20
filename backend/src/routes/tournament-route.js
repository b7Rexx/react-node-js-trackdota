const router = require('express').Router();
const TournamentController = require('../controllers/tournament-controller');
const authentication = require('../middlewares/authentication-middleware');

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
//DELETE api/tournament/:id
  .delete(authentication, TournamentController.destroy);


module.exports = router;
