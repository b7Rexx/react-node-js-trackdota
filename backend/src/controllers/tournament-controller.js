const MESSAGE = require('../constants');
const TournamentQuery = require('../queries/tournament-query');
const validatorUtils = require('../utils/validator');
const _ = require('lodash');

class TournamentController {
  index = (req, res, next) => {
    TournamentQuery.allTournaments().then(
      data => {
        res.json(data);
      }
    );
  };
  listByUser = (req, res, next) => {
    TournamentQuery.tournamentsByUser(req.AuthID).then(
      data => {
        res.json(data);
      }
    );
  };

  create = (req, res, next) => {
    let input = req.body;
    input.startDate = _.isEmpty(input.startDate) ? null : input.startDate;
    input.endDate = _.isEmpty(input.endDate) ? null : input.endDate;
    input.createdBy = req.AuthID;
    const {error, value} = validatorUtils.tournamentValidate(input);
    if (error) {
      error.status = 422;
      return next(error);
    } else {
      TournamentQuery.createTournament(value).then(data => {
        res.json({message: MESSAGE.TOURNAMENT_CREATED, newId: data.id});
      })
        .catch(err => {
          next(err);
        });

    }
  };

  destroy = (req, res, next) => {
    TournamentQuery.destroyById(req.params.id).then(data => {
      res.json({message: MESSAGE.TOURNAMENT_DELETED});
    })
      .catch(err => {
        next(err);
      });
  };

  detailById = (req, res, next) => {
    res.send('OK');
  };
}

module.exports = new TournamentController();
