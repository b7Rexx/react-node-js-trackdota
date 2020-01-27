import React, {Component} from 'react';
import Header from './layout/header';
import Login from './pages/login';
import Register from './pages/register';
import Profile from "./pages/user/tournament";
import Games from "./pages/user/game";
import {connect} from 'react-redux';
import {USER_LOGIN, USER_TOURNAMENT, USER_REGISTER, USER_GAMES} from "../constants/routes";
import {Redirect, Route} from "react-router-dom";

const mapStateToProps = state => {
  return {loginState: state.user.loginState};
};

class User extends Component {

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
        <Route exact path={USER_GAMES}>
          {!this.props.loginState ? <Redirect to={USER_LOGIN}/> : <Games {...this.props}/>}
        </Route>
      </>);
  }
}

export default connect(mapStateToProps)(User);
