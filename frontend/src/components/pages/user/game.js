import React, {Component} from 'react';
import {connect} from "react-redux";
import {userGames} from "../../../api/server-fetch";
import {getTournamentGames} from "../../../actions/user-game";
import {USER_TOURNAMENT} from "../../../constants/routes";

const mapStateToProps = state => {
  return {userGame: state.userGame};
};

function mapDispatchToProps(dispatch) {
  return {
    getTournamentGames: (payload) => dispatch(getTournamentGames(payload))
  };
}

class Game extends Component {
  componentDidMount() {
    let tournamentId = this.props.match.params.tournamentId || false;
    if (!tournamentId)
      this.props.history.push(USER_TOURNAMENT);
    if (this.props.userGame.fetchStatus) {
      userGames(tournamentId).then(success => {
        console.log(success.data);
        this.props.getTournamentGames(success.data.tournament, success.data.games);
      });
    }
  }

  render() {
    return (
      <>
        Games
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);