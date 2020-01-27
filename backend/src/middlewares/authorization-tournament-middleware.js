const TournamentQuery = require('../queries/tournament-query');

authorizeTournament = (req, res, next) => {
  TournamentQuery.findById(req.params.id).then(tournament => {
    if (req.AuthID === tournament.createdBy) {
      next();
    }
    next({status: 401, message: 'Unauthorized action'});
  }).catch(err => {
    next({status: 404, message: 'Invalid tournament Id'});
  });
};

module.exports = authorizeTournament;
