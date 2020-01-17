const User = require('../models/user-model').modelDefinition();

class UserQuery {
  allUsers = () => {
    return User.findAll({attributes: {exclude: ['password']}});
  };

  createUser = (insertData) => {
    return User.findOrCreate({where: {email: insertData.email}, defaults: insertData});
  };

  findUserByEmail = (email) => {
    return User.findOne({where: {email: email}});
  };
}

module.exports = new UserQuery();
