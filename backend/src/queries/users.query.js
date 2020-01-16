const {Users} = require('./../models');

allUsers = () => {
  return Users.findAll({attributes: {exclude: ['password']}});
};

createUser = (insertData) => {
  return Users.create(insertData);
};

findUserByEmail = (email) => {
  return Users.findOne({where: {email: email}});
};

module.exports = {
  allUsers,
  createUser,
  findUserByEmail
};
