const express = require('express');
const router = express.Router();
const usersController = require('./../controllers/users.controller');

router.route('/')
  //GET api/users
  .get(usersController.index)
  //POST api/users
  .post(usersController.store);

router.route('/create')
  //POST /api/users/create
  .post(usersController.create);

router.route('/:user')
  //GET /api/users/:user
  .get(usersController.show)
  //PUT /api/users/:user
  .put(usersController.update)
  //DELETE /api/users/:user
  .delete(usersController.destroy);

router.route('/:user/edit')
  //GET /api/users/:user/edit
  .get(usersController.edit);

module.exports = router;
