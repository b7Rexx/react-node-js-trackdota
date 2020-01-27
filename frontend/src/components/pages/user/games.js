import React, {Component} from 'react';
import {connect} from "react-redux";
import {userGames} from "../../../api/server-fetch";

const mapStateToProps = state => {
  return {userGame: state.userGame};
};


class Games extends Component {
  componentDidMount() {
console.log(this.props);
    // if (this.props.userGame.fetchStatus) {
    //   userGames().then(success => {
    //     this.props.getUserTournaments(success.data);
    //   });
    // }
  }

  render() {
    return (
      <>
        Games
      </>
    );
  }
}

export default connect(mapStateToProps)(Games);