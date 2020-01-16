// const validatorUtils = require('./../utils/validator');

const GameQuery = require('../queries/game.query');

class GameController {
  index = (req, res, next) => {
    GameQuery.allGames().then(
      data => {
        res.json(data);
      }
    );
  };
}

module.exports = new GameController();
