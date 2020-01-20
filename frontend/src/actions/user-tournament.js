import {GET_USER_TOURNAMENT} from "../constants/action-types";

export function getUserTournaments(tournamentList) {
  return {type: GET_USER_TOURNAMENT, tournamentList};
}
