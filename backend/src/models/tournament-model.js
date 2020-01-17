const Model = require('./model');

class Tournament extends Model {
  constructor() {
    super();
    this.modelDefinition();
  }

  modelDefinition() {
    return this.sequelizeInit.define('tournaments', {
      id: {
        type: this.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      title: this.Sequelize.STRING(1024),
      detail: {
        type: this.Sequelize.TEXT,
        allowNull: true
      },
      startDate: {
        type: this.Sequelize.DATE,
        allowNull: true
      },
      endDate: {
        type: this.Sequelize.DATE,
        allowNull: true
      },
      createdBy: {
        type: this.Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id'
        },
        allowNull: false,
      },
    });
  }
}

module.exports = new Tournament();
