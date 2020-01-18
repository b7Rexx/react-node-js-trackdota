const SequelizeModel = require('../utils/sequelize-model');

class Team extends SequelizeModel {
  constructor() {
    super();
    this.modelDefinition();
  }

  modelDefinition() {
    return this.sequelizeInit.define('teams', {
      id: {
        type: this.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique:true,
      },
      name: this.Sequelize.STRING,
      teamImage: {
        type: this.Sequelize.STRING,
        allowNull: true
      },
    });
  }
}

module.exports = new Team();
