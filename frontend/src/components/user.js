import React, {Component} from 'react';
import Header from './layout/header';
import Login from './pages/login';
import Register from './pages/register';
import Profile from "./pages/profile";
import {connect} from 'react-redux';
import {clearLogin, clearRegister} from '../actions/user-action';
import _ from 'lodash';
import {USER_LOGIN, USER_PROFILE} from "../constants/routes";

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
        return <EnhancedRegister {...this.props}/>;
      case 'login':
        return <EnhancedLogin {...this.props}/>;
      default:
        return <EnhancedProfile {...this.props}/>;
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

const EnhancedLogin = withProfileRedirect(Login);
const EnhancedRegister = withProfileRedirect(Register);

const EnhancedProfile = withLoginRedirect(Profile);

function withProfileRedirect(Component) {
  return function (props) {
    if (!props.loginState)
      return <Component {...props}/>;
    else {
      props.history.push(USER_PROFILE);
      return <Profile {...props}/>;
    }
  }
}

function withLoginRedirect(Component) {
  return function (props) {
    if (props.loginState)
      return <Component {...props}/>;
    else {
      props.history.push(USER_LOGIN);
      return <Login {...props}/>;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
