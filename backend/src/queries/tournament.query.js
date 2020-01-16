const Tournament = require('../models/tournament.model').modelDefinition();

class TournamentQuery {
  allTournaments = () => {
    return Tournament.findAll();
  };
}

module.exports = new TournamentQuery();
