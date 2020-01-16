const router = require('express').Router();
const UsersController = require('../controllers/user.controller');

router.route('/')
//GET api/users
  .get(UsersController.index);

router.route('/create')
  .post(UsersController.create);


module.exports = router;
