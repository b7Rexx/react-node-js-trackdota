import {LOGIN_STATUS} from "./../constants/action-types";

const initialState = {
  data: {},
  error: {},
  loginStatus: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_STATUS:
      return Object.assign({}, state, {data: action.payload});
    default:
      return state;
  }
}

export default rootReducer;
