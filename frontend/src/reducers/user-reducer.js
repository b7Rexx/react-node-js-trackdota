import {CLEAR_LOGIN, CLEAR_REGISTER, REGISTER_ACTION} from "./../constants/action-types";
import {EMPTY} from "../constants/status";

const initialState = {
  userInfo: {data: {}, error: {}, status: EMPTY},
  login: {data: {}, error: {}, status: EMPTY},
  register: {data: {}, error: {}, status: EMPTY},
};

function userReducer(prevState = initialState, action) {
  switch (action.type) {
    case CLEAR_LOGIN:
      return Object.assign({}, prevState, {login: {data: {}, error: {}, status: EMPTY}});
    case CLEAR_REGISTER:
      return Object.assign({}, prevState, {register: {data: {}, error: {}, status: EMPTY}});
    case REGISTER_ACTION:
      return Object.assign({}, prevState, {register: action.payload});
    default:
      return prevState;
  }
}

export default userReducer;
