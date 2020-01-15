const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

generatePassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = {
  generatePassword,
  comparePassword
};
