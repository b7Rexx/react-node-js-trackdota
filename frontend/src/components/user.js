import React, {Component} from 'react';
import Header from './layout/header';
import Login from './pages/login';
import Register from './pages/register';
import Profile from "./pages/user-tournament";
import {connect} from 'react-redux';
import {clearLogin, clearRegister} from '../actions/user-action';
import _ from 'lodash';
import {USER_LOGIN, USER_TOURNAMENT, USER_REGISTER} from "../constants/routes";
import {Redirect, Route} from "react-router-dom";

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
    if (this.props.match.url === USER_LOGIN)
      if (!_.isEmpty(this.props.login.data) || !_.isEmpty(this.props.login.error)) {
        this.props.clearLogin();
      }
    if (this.props.match.url === USER_REGISTER)
      if (!_.isEmpty(this.props.register.data) || !_.isEmpty(this.props.register.error)) {
        this.props.clearRegister();
      }
  }

  render() {
    return (
      <>
        <Header {...this.props}/>
        <Route exact path={USER_LOGIN}>
          {this.props.loginState ? <Redirect to={USER_TOURNAMENT}/> : <Login {...this.props}/>}
        </Route>
        <Route exact path={USER_REGISTER}>
          {this.props.loginState ? <Redirect to={USER_TOURNAMENT}/> : <Register {...this.props}/>}
        </Route>
        <Route exact path={USER_TOURNAMENT}>
          {!this.props.loginState ? <Redirect to={USER_LOGIN}/> : <Profile {...this.props}/>}
        </Route>
      </>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
