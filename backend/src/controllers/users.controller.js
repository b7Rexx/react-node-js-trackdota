const bcryptUtils = require('./../utils/bcrypt');
const validatorUtils = require('./../utils/validator');

const usersQuery = require('./../queries/users.query');

const MESSAGE = require('../constants');

index = (req, res, next) => {
  usersQuery.allUsers().then(users =>
    res.json(users)
  );
};

create = (req, res, next) => {
  const {error, value} = validatorUtils.userValidate(req.body);
  if (error) {
    error.status = 422;
    return next(error);
  }
  value.password = bcryptUtils.generatePassword(value.password);
  usersQuery.createUser(value).then(user =>
    res.json({message: MESSAGE.USER_CREATED, newUserId: user})
  );
};

store = (req, res, next) => {

};

show = (req, res, next) => {
};

edit = (req, res, next) => {
};

update = (req, res, next) => {
};

destroy = (req, res, next) => {
};


module.exports = {
  index,
  create,
  store,
  show,
  edit,
  update,
  destroy
};
