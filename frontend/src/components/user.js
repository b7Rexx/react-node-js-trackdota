import React, {Component} from 'react';
import Header from './layout/header';
import Login from './pages/login';
import Register from './pages/register';
import {connect} from 'react-redux';
import {clearLogin, clearRegister} from '../actions/user-action';
import _ from 'lodash';

const mapStateToProps = state => {
  return state.user;
};

function mapDispatchToProps(dispatch) {
  return {
    clearRegister: () => dispatch(clearRegister()),
    clearLogin: () => dispatch(clearLogin())
  };
}

class User extends Component {
  componentDidUpdate() {
    if (!_.isEmpty(this.props.login.data) || !_.isEmpty(this.props.login.error)) {
      this.props.clearLogin();
    }
    if (!_.isEmpty(this.props.register.data) || !_.isEmpty(this.props.register.error)) {
      this.props.clearRegister();
    }
  }

  getUserBody() {
    switch ((this.props.match.params.action).toLowerCase()) {
      case 'register':
        return <Register/>;
      default:
        return <Login/>;
    }
  }

  render() {
    return (
      <>
        <Header {...this.props}/>
        {this.getUserBody()}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
