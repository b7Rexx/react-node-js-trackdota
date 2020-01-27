const jwtUtils = require('./../utils/jwt');
const MESSAGE = require('./../constants');

authorizeTournament = (req, res, next) => {
  console.log(req.AuthID,'tounamenrn >>> ',req.id);
};

module.exports = authorizeTournament;
