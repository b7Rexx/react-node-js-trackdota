import _ from 'lodash';
import {REGISTER_ACTION, LOGIN_ACTION, CLEAR_LOGIN, CLEAR_REGISTER, SET_LOGIN} from '../constants/action-types';
import {EMPTY} from '../constants/status';
import {setUserData, setUserToken} from "../store/local-storage";

export function clearRegister() {
  return {type: CLEAR_REGISTER};
}

export function clearLogin() {
  return {type: CLEAR_LOGIN};
}

/**
 * register form validation
 * @param formData
 * @param callback
 * @returns {{payload: *, type: *}}
 */
export function registerValidation(formData, callback) {
  let payload = {
    data: formData,
    error: {},
    valid: true,
    status: EMPTY
  };
  // validation
  Object.keys(formData).forEach(function (value) {
    switch (value) {
      case 'firstName':
        if (_.isEmpty(formData.firstName)) {
          payload.valid = false;
          payload.error.firstName = 'firstName is required';
        } else
          payload.error.firstName = null;
        break;
      case 'lastName':
        if (_.isEmpty(formData.lastName)) {
          payload.valid = false;
          payload.error.lastName = 'lastName is required';
        } else
          payload.error.lastName = null;
        break;
      case 'email':
        if (_.isEmpty(formData.email)) {
          payload.valid = false;
          payload.error.email = 'email is required';
        } else {
          if (!emailValidation(formData.email)) {
            payload.valid = false;
            payload.error.email = 'email is invalid';
          } else
            payload.error.email = null;
        }
        break;
      case 'password':
        if (_.isEmpty(formData.password)) {
          payload.valid = false;
          payload.error.password = 'password is required';
        } else {
          if (formData.password !== formData.confirmPassword) {
            payload.valid = false;
            payload.error.password = 'comfirm password must match';
          } else
            payload.error.password = null;
        }
        break;
      case 'confirmPassword':
        if (_.isEmpty(formData.confirmPassword)) {
          payload.valid = false;
          payload.error.confirmPassword = 'confirmPassword is required';
        } else
          payload.error.confirmPassword = null;
        break;
      default:
        break;
    }
  });
  callback(payload);
  return {type: REGISTER_ACTION, payload};
}

/**
 * dispatch register button changes with form payload
 * @param payload
 * @param status
 * @returns {{payload: *, type: *}}
 */
export function registerAction(payload, status) {
  payload.status = status;
  return {type: REGISTER_ACTION, payload};
}


/**
 * login form validation
 * @param formData
 * @param callback
 * @returns {{payload: *, type: *}}
 */
export function loginValidation(formData, callback) {
  let payload = {
    data: formData,
    error: {},
    valid: true,
    status: EMPTY
  };
  // validation
  Object.keys(formData).forEach(function (value) {
    switch (value) {
      case 'email':
        if (_.isEmpty(formData.email)) {
          payload.valid = false;
          payload.error.email = 'email is required';
        } else {
          if (!emailValidation(formData.email)) {
            payload.valid = false;
            payload.error.email = 'email is invalid';
          } else
            payload.error.email = null;
        }
        break;
      case 'password':
        if (_.isEmpty(formData.password)) {
          payload.valid = false;
          payload.error.password = 'password is required';
        } else {
          payload.error.password = null;
        }
        break;
      default:
        break;
    }
  });
  callback(payload);
  return {type: LOGIN_ACTION, payload};
}

/**
 * dispatch login button changes with form payload
 * @param payload
 * @param status
 * @returns {{payload: *, type: *}}
 */
export function loginAction(payload, status) {
  payload.status = status;
  return {type: LOGIN_ACTION, payload};
}

export function setUserLogin(userData) {
  setUserToken(userData.token);
  setUserData(userData.user);
  return {type: SET_LOGIN, payload: userData.user};
}

/**
 * email validation
 * @param email
 * @returns {boolean}
 */
function emailValidation(email) {
  return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
}
