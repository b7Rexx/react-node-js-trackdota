const bcryptUtils = require('./../utils/bcrypt');
const validatorUtils = require('./../utils/validator');

const UserQuery = require('../queries/user-query');

const MESSAGE = require('../constants');

class UserController {
  index = (req, res, next) => {
    UserQuery.allUsers().then(users =>
      res.json(users)
    );
  };

  create = (req, res, next) => {
    const {error, value} = validatorUtils.userValidate(req.body);
    if (error) {
      error.status = 422;
      return next(error);
    } else {
      value.password = bcryptUtils.generatePassword(value.password);
      UserQuery.createUser(value).then(([user, created]) => {
          if (!created)
            return next({status: 422, message: MESSAGE.EMAIL_TAKEN});
          res.json({message: MESSAGE.USER_CREATED, newUserId: user.id});
        }
      );
    }
  };
}

module.exports = new UserController();
