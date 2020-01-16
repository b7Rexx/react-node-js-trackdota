const env = require('dotenv').config().parsed;

module.exports = {
  host: env.NODE_HOST || 'localhost',
  port: env.NODE_PORT || 5000,
  jwtSecret: env.NODE_JWT_SECRET || 'thisIsSecretJwtKey'
};
