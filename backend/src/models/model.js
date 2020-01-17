const Sequelize = require('sequelize');
const dbConfig = require('../configs/db-config');

class Model {
  constructor() {
    this.Sequelize = Sequelize;
    this.sequelizeInit = new Sequelize(
      dbConfig.database,
      dbConfig.username,
      dbConfig.password,
      {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
      }
    );
  }

  sync() {
    return this.sequelizeInit.sync({force: false})
  }
}

module.exports = Model;
