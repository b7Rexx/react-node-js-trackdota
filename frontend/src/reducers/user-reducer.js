import {LOGIN_STATUS} from "./../constants/action-types";

const initialState = {
  loginStatus: false,
  data: {},
  error: {}
};

function userReducer(prevState = initialState, action) {
  switch (action.type) {
    case LOGIN_STATUS:
      return Object.assign({}, prevState, {data: action.payload});
    default:
      return prevState;
  }
}

export default userReducer;
