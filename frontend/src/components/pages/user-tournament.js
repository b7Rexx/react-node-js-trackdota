import React, {Component} from 'react';
import {connect} from "react-redux";
import {
  addTournamentAction,
  getUserTournaments,
  removeTournamentAction,
  tournamentValidate
} from "../../actions/user-tournament";
import {addTournament, removeTournament, userTournaments} from "../../api/server-fetch";
import Table from "../react-component/table";
import FormInput from "../react-component/form-input";
import {FAILED, LOADING, SUCCESS} from "../../constants/status";

const mapStateToProps = state => {
  return {userTournament: state.userTournament};
};

function mapDispatchToProps(dispatch) {
  return {
    getUserTournaments: (data) => dispatch(getUserTournaments(data)),
    validation: (data) => dispatch(tournamentValidate(data, function (payload) {
      if (payload.valid) {
        dispatch(addTournamentAction(payload, LOADING));
        setTimeout(function () {
          addTournament(Object.assign({}, data))
            .then(success => {
              dispatch(addTournamentAction(payload, SUCCESS));
            })
            .catch(error => {
              dispatch(addTournamentAction(payload, FAILED));
            });
        }, 500);
      }
    })),
    removeTournamentById: (id) => {
      removeTournament(id).then(success => {
        dispatch(removeTournamentAction(SUCCESS));
      })
        .catch(error => {
          dispatch(removeTournamentAction(FAILED));
        });
    }
  };
}

class UserTournament extends Component {

  componentWillMount() {
    if (this.props.userTournament.fetchStatus) {
      userTournaments().then(success => {
        this.props.getUserTournaments(success.data);
      });
    }
  }

  getIcon() {
    switch (this.props.userTournament.formData.status) {
      case LOADING:
        return 'fa fa-spinner loading';
      case SUCCESS:
        return 'fa fa-check';
      case FAILED:
        return 'fa fa-times';
      default:
        return 'fa fa-plus';
    }
  }

  editHandler(e, id) {
    e.preventDefault();
    console.log('edit', id);
  }

  removeHandler(e, id) {
    e.preventDefault();
    /**
     * call by from table data
     */
    this.removeTournamentById(id);
  }

  addTournamentHandler(e) {
    e.preventDefault();
    let inputValues = [];
    Object.values(e.target.getElementsByTagName('input')).forEach((item) => {
      if (item.getAttribute('name'))
        inputValues[item.getAttribute('name')] = item.value;
    });
    this.props.validation(inputValues);
  }

  render() {
    const tableConfig = [
      {name: 'Title', key: 'title', type: 'string'},
      {name: 'Start', key: 'startDate', type: 'date'},
      {name: 'End', key: 'endDate', type: 'date'},
      {name: 'Edit', key: 'id', type: 'action', action: 'editHandler'},
      {name: 'Remove', key: 'id', type: 'action', action: 'removeHandler'},
    ];
    let propsData = this.props.userTournament.formData.data;
    let propsError = this.props.userTournament.formData.error;
    return (
      <>
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <div className="user-block">
              <h3>My Tournaments</h3>
              <Table tableConfig={tableConfig} tableData={this.props.userTournament.tournaments}
                     editHandler={this.editHandler} removeHandler={this.removeHandler} {...this.props}/>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="user-block">
              <div className='text-right'>Add Tournament</div>
              <form onSubmit={(e) => this.addTournamentHandler(e)}>
                <FormInput name='title' label='Title' defaultValue={propsData.title} error={propsError.title}/>
                <FormInput name='detail' label='Detail' defaultValue={propsData.detail} error={propsError.detail}/>
                <FormInput name='startDate' label='Start Date' type='date' defaultValue={propsData.startDate}
                           error={propsError.startDate}/>
                <FormInput name='endDate' label='End Date' type='date' defaultValue={propsData.endDate}
                           error={propsError.endDate}/>
                <div className='form-submit'>
                  <FormInput type='submit' icon={this.getIcon()} value='Submit'/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTournament);
