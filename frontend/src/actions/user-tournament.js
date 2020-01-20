import {GET_USER_TOURNAMENT, ADD_TOURNAMENT_ACTION, REMOVE_TOURNAMENT_ACTION} from "../constants/action-types";
import {EMPTY} from "../constants/status";
import _ from "lodash";

export function getUserTournaments(payload) {
  return {type: GET_USER_TOURNAMENT, payload};
}

export function tournamentValidate(formData, callback) {
  let payload = {
    data: formData,
    error: {},
    valid: true,
    status: EMPTY
  };
  // validation
  Object.keys(formData).forEach(function (value) {
    switch (value) {
      case 'title':
        if (_.isEmpty(formData.title)) {
          payload.valid = false;
          payload.error.title = 'title is required';
        } else
          payload.error.title = null;
        break;
      default:
        break;
    }
  });
  callback(payload);
  return {type: ADD_TOURNAMENT_ACTION, payload};
}

/**
 * dispatch changes with form payload
 * @param payload
 * @param status
 * @returns {{payload: *, type: *}}
 */
export function addTournamentAction(payload, status) {
  payload.status = status;
  return {type: ADD_TOURNAMENT_ACTION, payload};
}
export function removeTournamentAction(status) {
  return {type: REMOVE_TOURNAMENT_ACTION, status};
}

