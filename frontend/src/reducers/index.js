import {combineReducers} from 'redux';
import userReducer from './user-reducer';
import userTournamentReducer from './user-tournament-reducer';

export default combineReducers({
  user: userReducer,
  userTournament: userTournamentReducer
});
