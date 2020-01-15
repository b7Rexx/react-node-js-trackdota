const jwt = require('jsonwebtoken');
const config = require('./../configs');

generateToken = (userId) => {
  return jwt.sign({id: userId}, config.jwtSecret, {expiresIn: '1 days'});
};


module.exports = {
  generateToken
};
