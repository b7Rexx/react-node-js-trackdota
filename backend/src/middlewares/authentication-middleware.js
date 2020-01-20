const jwtUtils = require('./../utils/jwt');
const MESSAGE = require('./../constants');

authentication = (req, res, next) => {
  let token = '';
  if (req.header('Authorization')) token = req.header('Authorization');
  else if (req.header('Token')) token = req.header('Token');
  else if (req.token) token = req.token;
  else
    return next({status: 401, message: MESSAGE.AUTH_MISSING});
  jwtUtils.verifyToken(token,
    (err) => {
      if (err) return next(err);
    },
    (done) => {
      /**
       * Set auth user id from auth middleware
       */
      req.AuthID = done.id;
      next();
    }
  );
};

module.exports = authentication;
