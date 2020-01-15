const jwt = require('jsonwebtoken');
const config = require('./../configs');

const tokenType = 'Bearer ';

generateToken = (userId) => {
  return tokenType + jwt.sign({id: userId}, config.jwtSecret, {expiresIn: '1 days'});
};
verifyToken = (token, failCB, successCB) => {
  let removeType = token.replace(tokenType, '');
  jwt.verify(removeType, config.jwtSecret, function (err, done) {
    if (err) {
      failCB(err);
    } else {
      successCB(done);
    }
  });
};

module.exports = {
  generateToken,
  verifyToken
};
