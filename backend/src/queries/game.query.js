const Game = require('../models/game.model').modelDefinition();

class GameQuery {
  allGames = () => {
    return Game.findAll();
  };
}

module.exports = new GameQuery();
