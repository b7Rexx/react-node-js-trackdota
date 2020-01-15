const express = require('express');
const router = express.Router();
const usersController = require('./../controllers/users.controller');

router.route('/')
  .get(usersController.index)
  .post(usersController.store);

router.route('/create')
  .post(usersController.create);

router.route('/:user')
  .get(usersController.show)
  .put(usersController.update)
  .delete(usersController.destroy);

router.route('/:user/edit')
  .get(usersController.edit);

module.exports = router;
