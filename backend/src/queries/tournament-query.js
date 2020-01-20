const Tournament = require('../models/tournament').modelDefinition();

class TournamentQuery {
  allTournaments = () => {
    return Tournament.findAll();
  };

  tournamentsByUser = (userId) => {
    return Tournament.findAll({where: {createdBy: userId}});
  };
}

module.exports = new TournamentQuery();
