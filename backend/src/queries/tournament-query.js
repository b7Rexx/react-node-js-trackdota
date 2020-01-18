const Tournament = require('../models/tournament').modelDefinition();

class TournamentQuery {
  allTournaments = () => {
    return Tournament.findAll();
  };
}

module.exports = new TournamentQuery();
