const Game = require('../models/game').modelDefinition();

class GameQuery {
  allGames = () => {
    return Game.findAll();
  };
}

module.exports = new GameQuery();
