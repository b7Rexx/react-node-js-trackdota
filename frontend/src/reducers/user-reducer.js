import {SET_LOGIN, CLEAR_LOGIN, CLEAR_REGISTER, LOGIN_ACTION, REGISTER_ACTION} from './../constants/action-types';
import {EMPTY} from '../constants/status';
import {getUserToken} from "../store/local-storage";
import _ from 'lodash';

const initialState = {
  loginState: (!_.isEmpty(getUserToken())),
  userInfo: {},
  login: {data: {}, error: {}, valid: true, status: EMPTY},
  register: {data: {}, error: {}, valid: true, status: EMPTY},
};

function userReducer(prevState = initialState, action) {
  switch (action.type) {
    case CLEAR_LOGIN:
      return Object.assign({}, prevState, {login: {data: {}, error: {}, valid: true, status: EMPTY}});
    case CLEAR_REGISTER:
      return Object.assign({}, prevState, {register: {data: {}, error: {}, valid: true, status: EMPTY}});
    case REGISTER_ACTION:
      return Object.assign({}, prevState, {register: action.payload});
    case LOGIN_ACTION:
      return Object.assign({}, prevState, {login: action.payload});
    case SET_LOGIN:
      return Object.assign({}, prevState, {loginState: true, userInfo: action.payload});
    default:
      return prevState;
  }
}

export default userReducer;
