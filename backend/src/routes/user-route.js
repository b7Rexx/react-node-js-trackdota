const router = require('express').Router();
const UsersController = require('../controllers/user-controller');

router.route('/')
//GET api/users
  .get(UsersController.index);

router.route('/create')
//POST api/users/create
  .post(UsersController.create);


module.exports = router;
