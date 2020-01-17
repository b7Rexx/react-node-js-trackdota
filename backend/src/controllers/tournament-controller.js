// const validatorUtils = require('./../utils/validator');

const TournamentQuery = require('../queries/tournament-query');

class TournamentController {
  index = (req, res, next) => {
    TournamentQuery.allTournaments().then(
      data => {
        res.json(data);
      }
    );
  };
}

module.exports = new TournamentController();
