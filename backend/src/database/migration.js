const users = require('../models/user');
const teams = require('../models/team');
const tournaments = require('../models/tournament');
const games = require('../models/game');

/**
 * create table if not exists
 *
 */
users.sync().then(() => {
  teams.sync().then(() => {
    tournaments.sync().then(() => {
      games.sync().then(() => {
      });
    });
  });
});

