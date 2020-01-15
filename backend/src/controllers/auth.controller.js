const {Users} = require('./../models');

const bcryptUtils = require('./../utils/bcrypt');
const validatorUtils = require('./../utils/validator');
const jwtUtils = require('./../utils/jwt');

const MESSAGE = require('../constants');

login = (req, res, next) => {
  const {error, value} = validatorUtils.loginValidate(req.body);
  if (error) {
    error.status = 422;
    return next(error);
  }
  Users.findOne({where: {email: value.email}})
    .then(user => {
        let checkAuth = bcryptUtils.comparePassword(value.password, user.password);
        if (!checkAuth)
          res.json({status: false, message: MESSAGE.LOGIN_FAILED});
        else {
          let token = jwtUtils.generateToken(user.id);
          res.json({status: true, message: MESSAGE.LOGIN_SUCCESS, token: token, user: user});
        }
      }
    )
};

module.exports = {
  login
};