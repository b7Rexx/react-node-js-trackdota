import {GET_USER_TOURNAMENT} from "../constants/action-types";

const initialState = {
  fetchStatus: true,
  tournaments: [],
  formData: {
    data: {},
    error: {}
  }
};

function userTournamentReducer(prevState = initialState, action) {
  switch (action.type) {
    case GET_USER_TOURNAMENT:
      return Object.assign({}, prevState, {
        fetchStatus: false,
        tournaments: action.payload
      });
    default:
      return prevState;
  }
}

export default userTournamentReducer;
