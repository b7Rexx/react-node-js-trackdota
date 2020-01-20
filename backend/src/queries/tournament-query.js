const Tournament = require('../models/tournament').modelDefinition();

class TournamentQuery {
  allTournaments = () => {
    return Tournament.findAll();
  };

  tournamentsByUser = (userId) => {
    return Tournament.findAll({where: {createdBy: userId}});
  };

  createTournament = (insertData) => {
    return Tournament.create(insertData);
  };

  destroyById = (id) => {
    /**
     * remove all reference games before removing tournament
     */


    return Tournament.destroy({where: {id: id}});
  }
}

module.exports = new TournamentQuery();
