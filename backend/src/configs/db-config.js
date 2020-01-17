const env = require('dotenv').config().parsed;

const development = {
  host: env.NODE_DB_HOST || 'localhost',
  username: env.NODE_DB_USERNAME || 'root',
  password: env.NODE_DB_PASSWORD || '',
  database: env.NODE_DB_DATABASE || 'trackdota',
  dialect: 'mysql',
};
const production = {
  host: env.NODE_DB_HOST || 'localhost',
  username: env.NODE_DB_USERNAME || 'root',
  password: env.NODE_DB_PASSWORD || '',
  database: env.NODE_DB_DATABASE || 'trackdota',
  dialect: 'mysql',
};

if (env.NODE_ENV === 'development') {
  module.exports = development;
} else {
  module.exports = production;
}
