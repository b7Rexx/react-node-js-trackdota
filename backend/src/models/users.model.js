module.exports = (sequelize, type) => {
  return sequelize.define('users', {
    id: {
      type: type.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: type.STRING,
    lastName: type.STRING,
    email: {
      type: type.STRING,
      unique: true
    },
    password: type.STRING,
    profileImage: {
      type: type.STRING,
      allowNull: true,
    },
  })
};
