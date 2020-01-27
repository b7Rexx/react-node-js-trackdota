import {GET_TOURNAMENT_GAMES} from "../constants/action-types";

export function getTournamentGames(tournament, games) {
  return {type: GET_TOURNAMENT_GAMES, tournament, games};
}
