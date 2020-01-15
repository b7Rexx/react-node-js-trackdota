const Sequelize = require('sequelize');

const dbConfig = require('../configs/db.config');

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: console.log
  }
);

const usersModel = require('./users.model');

const Users = usersModel(sequelize, Sequelize);

sequelize.sync({force: false})
  .then(() => {
    console.log(`Database & tables created if not exist!`)
  });

module.exports = {
  Users
};
