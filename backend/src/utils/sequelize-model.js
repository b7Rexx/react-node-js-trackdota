const Sequelize = require('sequelize');
const dbConfig = require('../configs/db-config');

class SequelizeModel {
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
    /**
     * sync table with database
     * force {boolean} reset table flag
     */
    return this.sequelizeInit.sync({force: false})
  }
}

module.exports = SequelizeModel;
