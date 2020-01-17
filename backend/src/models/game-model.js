const Model = require('./model');

class Game extends Model {
  constructor() {
    super();
    this.modelDefinition();
  }

  modelDefinition() {
    return this.sequelizeInit.define('games', {
      id: {
        type: this.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
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
      firsTeam: {
        type: this.Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'teams',
          key: 'id'
        }
      },
      secondTeam: {
        type: this.Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'teams',
          key: 'id'
        }
      },

      tournamentId: {
        type: this.Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'tournaments',
          },
          key: 'id',
          allowNull: false,
        }
      },
    });
  }
}

module.exports = new Game();
