import {combineReducers} from 'redux';
import userReducer from './user-reducer';
import userTournamentReducer from './user-tournament-reducer';
import userGameReducer from './user-game-reducer';

export default combineReducers({
  user: userReducer,
  userTournament: userTournamentReducer,
  userGame: userGameReducer,
});
