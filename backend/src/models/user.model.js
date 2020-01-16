const Model = require('./index');

class User extends Model {
  constructor() {
    super();
    this.modelDefinition();
  }

  modelDefinition() {
    return this.sequelizeInit.define('users', {
      id: {
        type: this.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique:true,
      },
      firstName: this.Sequelize.STRING,
      lastName: this.Sequelize.STRING,
      email: {
        type: this.Sequelize.STRING,
        unique: true
      },
      password: this.Sequelize.STRING,
      profileImage: {
        type: this.Sequelize.STRING,
        allowNull: true,
      },
      userRole: {
        type: this.Sequelize.ENUM('super', 'admin', 'user'),
        defaultValue: 'user'
      }
    });
  }
}

module.exports = new User();
