import {LOGIN_STATUS} from "./../constants/action-types";

export function loginStatus(payload) {
  return {type: LOGIN_STATUS, payload};
}
