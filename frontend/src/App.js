import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {USER_GAMES, USER_LOGIN, USER_REGISTER, USER_TOURNAMENT} from './constants/routes';
import Home from './components/pages/home';
import bgWrapper from './assets/main-bg.jpg';
import Header from "./components/layout/header";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import Profile from "./components/pages/user/tournament";
import Games from "./components/pages/user/games";

const mapStateToProps = state => {
  return state;
};


const EnhancedProfile = withAuth(Profile);

function withAuth(Component) {
  return function (props) {
    if (props.user.loginState)
      return (<Component {...props}/>);
    else
      return (<Redirect to={USER_LOGIN}/>);
  }
}

class App extends Component {

  render() {
    return (
      <>
        <figure className='bg-wrapper'>
          <img src={bgWrapper} alt='bg'/>
        </figure>
        <div className='container'>
          <Router>
            <Header {...this.props}/>
            <Switch>
              <Route exact path={USER_LOGIN} component={
                (routerProps) =>
                  this.props.user.loginState ?
                    <Redirect to={USER_TOURNAMENT}/> :
                    <Login {...routerProps}/>}
              />
              <Route exact path={USER_REGISTER} component={
                (routerProps) =>
                  this.props.user.loginState ?
                    <Redirect to={USER_TOURNAMENT}/> :
                    <Register {...routerProps}/>}
              />
              <Route exact path={USER_TOURNAMENT} component={
                (routerProps) =>
                  !this.props.user.loginState
                    ? <Redirect to={USER_LOGIN}/> :
                    <Profile {...routerProps}/>}
              />
              <Route exact path={USER_GAMES} component={
                (routerProps) =>
                  !this.props.user.loginState
                    ? <Redirect to={USER_LOGIN}/> :
                    <Games {...routerProps}/>}
              />
              <Route component={(routerProps) => <Home {...routerProps}/>}/>
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps)(App);
