import _ from 'lodash';
import { REGISTER_ACTION, CLEAR_LOGIN, CLEAR_REGISTER} from "./../constants/action-types";
import {registerUser} from '../middlewares/user-middleware';

export function clearRegister() {
  return {type: CLEAR_REGISTER};
}

export function clearLogin() {
  return {type: CLEAR_LOGIN};
}


export function registerAction(formData) {
  let payload = {
    data: formData,
    error: {}
  };
  let validStatus = true;
  // validation
  Object.keys(formData).forEach(function (value) {
    switch (value) {
      case 'firstName':
        if (_.isEmpty(formData.firstName)) {
          validStatus = false;
          payload.error.firstName = 'firstName is required';
        } else
          payload.error.firstName = null;
        break;
      case 'lastName':
        if (_.isEmpty(formData.lastName)) {
          validStatus = false;
          payload.error.lastName = 'lastName is required';
        } else
          payload.error.lastName = null;
        break;
      case 'email':
        if (_.isEmpty(formData.email)) {
          validStatus = false;
          payload.error.email = 'email is required';
        } else {
          if (!emailValidation(formData.email)) {
            validStatus = false;
            payload.error.email = 'email is invalid';
          } else
            payload.error.email = null;
        }
        break;
      case 'password':
        if (_.isEmpty(formData.password)) {
          validStatus = false;
          payload.error.password = 'password is required';
        } else {
          if (formData.password !== formData.confirmPassword) {
            validStatus = false;
            payload.error.password = 'comfirm password must match';
          } else
            payload.error.password = null;
        }
        break;
      case 'confirmPassword':
        if (_.isEmpty(formData.confirmPassword)) {
          validStatus = false;
          payload.error.confirmPassword = 'confirmPassword is required';
        } else
          payload.error.confirmPassword = null;
        break;
      default:
        break;
    }
  });
  if (validStatus) {
    registerUser(Object.assign({}, formData))
      .then(success => {
        console.log(success);
      })
      .catch(error => {
        console.log(error);
      })

  } else
    return {type: REGISTER_ACTION, payload};
}

/**
 * email validation
 * @param email
 * @returns {boolean}
 */
function emailValidation(email) {
  return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
}
