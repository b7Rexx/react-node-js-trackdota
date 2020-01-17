const users = require('../models/user-model');
const teams = require('../models/team-model');
const tournaments = require('../models/tournament-model');
const games = require('../models/game-model');

users.sync().then(() => {
  teams.sync().then(() => {
    tournaments.sync().then(() => {
      games.sync().then(() => {
      });
    });
  });
});

