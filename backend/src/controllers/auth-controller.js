const bcryptUtils = require('./../utils/bcrypt');
const validatorUtils = require('./../utils/validator');
const jwtUtils = require('./../utils/jwt');

const UsersQuery = require('../queries/user-query');

const MESSAGE = require('../constants');

class AuthController {

  login = (req, res, next) => {
    validatorUtils.loginValidate(req.body)
      .then(value => {
        UsersQuery.findUserByEmail(value.email)
          .then(user => {
            let checkAuth = bcryptUtils.comparePassword(value.password, user.password);
            if (!checkAuth)
              return next({status: 401, message: {password: MESSAGE.LOGIN_FAILED}});
            else {
              let token = jwtUtils.generateToken(user.id);
              let userData = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                profileImage: user.profileImage,
              };
              res.json({status: true, message: MESSAGE.LOGIN_SUCCESS, token: token, user: userData});
            }
          }).catch(err => {
          return next({status: 401, message: {password: MESSAGE.LOGIN_FAILED}});
        });
      })
      .catch(err => {
        return next({status: 422, message: err});
      });
  }
}

module.exports = new AuthController();
