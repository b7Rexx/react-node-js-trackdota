import {ADD_TOURNAMENT_ACTION, GET_USER_TOURNAMENT, REMOVE_TOURNAMENT_ACTION} from "../constants/action-types";
import {EMPTY, SUCCESS} from "../constants/status";

const initialState = {
  fetchStatus: true,
  tournaments: [],
  formData: {
    data: {},
    error: {},
    valid: true,
    status: EMPTY
  }
};

function userTournamentReducer(prevState = initialState, action) {
  switch (action.type) {
    case GET_USER_TOURNAMENT:
      return Object.assign({}, prevState, {
        fetchStatus: false,
        tournaments: action.payload
      });
    case ADD_TOURNAMENT_ACTION:
      if (action.payload.status === SUCCESS)
        return Object.assign({}, prevState, {fetchStatus: true, formData: action.payload});
      return Object.assign({}, prevState, {formData: action.payload});
    case REMOVE_TOURNAMENT_ACTION:
      if (action.status === SUCCESS)
        return Object.assign({}, prevState, {fetchStatus: true});
      return prevState;
    default:
      return prevState;
  }
}

export default userTournamentReducer;
