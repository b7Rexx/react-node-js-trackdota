const bcryptUtils = require('./../utils/bcrypt');
const validatorUtils = require('./../utils/validator');
const UserQuery = require('../queries/user-query');
const multerUpload = require('../utils/multer');

const MESSAGE = require('../constants');

class UserController {
  index = (req, res, next) => {
    UserQuery.allUsers().then(users =>
      res.json(users)
    );
  };

  create = (req, res, next) => {

    let multerParse = multerUpload.single('profileImage');
    multerParse(req, res, (err) => {
      if (err)
        return next({status: 422, message: {error: err}});
      // return next({status: 422, message: {error: MESSAGE.MULTER_PARSE_ERROR}});
      req.body = Object.assign({}, req.body);

      validatorUtils.userValidate(req.body)
        .then(value => {
          value.password = bcryptUtils.generatePassword(value.password);

          /**
           * email exists validation
           */
          UserQuery.findUserByEmail(value.email).then(success => {
            if (success)
              return next({status: 422, message: {email: MESSAGE.EMAIL_TAKEN}});
            else {
              /**
               * append image to DB if exist
               */
              if (req.file) {
                value.profileImage = req.file.filename;
                UserQuery.createUser(value).then(([user, created]) => {
                    if (!created)
                      return next({status: 422, message: {email: MESSAGE.EMAIL_TAKEN}});
                    res.json({message: MESSAGE.USER_CREATED, newUserId: user.id});
                  }
                );
              } else {
                UserQuery.createUser(value).then(([user, created]) => {
                    if (!created)
                      return next({status: 422, message: {email: MESSAGE.EMAIL_TAKEN}});
                    res.json({message: MESSAGE.USER_CREATED, newUserId: user.id});
                  }
                );
              }
            }
          });
        })
        .catch(error => {
          return next({status: 422, message: error});
        });
    });
  };
}

module.exports = new UserController();
