import {GET_TOURNAMENT_GAMES} from "../constants/action-types";

const initialState = {
  fetchStatus: true,
  tournament: {},
  games: [],
};

function userGameReducer(prevState = initialState, action) {
  switch (action.type) {
    case GET_TOURNAMENT_GAMES:
      return Object.assign({}, prevState, {fetchStatus: false, tournament: action.tournament, games: action.games});
    default:
      return prevState;
  }
}

export default userGameReducer;
