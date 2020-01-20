import React, {Component} from 'react';
import {connect} from "react-redux";
import {getUserTournaments} from "../../actions/user-tournament";
import {getUserToken} from "../../store/local-storage";
import {userTournaments} from "../../api/server-fetch";
import Table from "../react-component/table";

const mapStateToProps = state => {
  return {userTournament: state.userTournament};
};

function mapDispatchToProps(dispatch) {
  return {
    getUserTournaments: (data) => dispatch(getUserTournaments(data))
  };
}

class UserTournament extends Component {

  componentWillMount() {
    if (this.props.userTournament.fetchStatus) {
      userTournaments(getUserToken()).then(success => {
        this.props.getUserTournaments(success.data);
      });
    }
  }

  render() {
    const tableConfig = [];
    return (
      <>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="user-block">
              <h3>My Tournaments</h3>
              <Table/>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTournament);