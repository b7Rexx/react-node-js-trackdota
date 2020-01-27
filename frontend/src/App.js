import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {USER_GAMES, USER_LOGIN, USER_REGISTER, USER_TOURNAMENT} from './constants/routes';
import Home from './components/pages/home';
import bgWrapper from './assets/main-bg.jpg';
import Header from "./components/layout/header";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import Tournament from "./components/pages/user/tournament";
import Game from "./components/pages/user/game";

const mapStateToProps = state => {
  return state;
};

const EnhancedTournament = withAuth(Tournament);
const EnhancedGame = withAuth(Game);
const EnhancedLogin = withAlreadyAuth(Login);
const EnhancedRegister = withAlreadyAuth(Register);

/**
 * if auth false redirect to login page
 * @param Component
 * @returns {Function}
 */
function withAuth(Component) {
  return function (props) {
    if (props.loginState)
      return (<Component {...props}/>);
    else
      return (<Redirect to={USER_LOGIN}/>);
  }
}

/**
 * if auth true redirect to home page
 * @param Component
 * @returns {Function}
 */
function withAlreadyAuth(Component) {
  return function (props) {
    if (!props.loginState)
      return (<Component {...props}/>);
    else
      return (<Redirect to={USER_TOURNAMENT}/>);
  }
}

class App extends Component {

  render() {
    let loginState = this.props.user.loginState;
    return (
      <>
        <figure className='bg-wrapper'>
          <img src={bgWrapper} alt='bg'/>
        </figure>
        <div className='container'>
          <Router>
            <Header {...this.props}/>
            <Switch>
              <Route exact path={USER_LOGIN}
                     component={(routerProps) => <EnhancedLogin loginState={loginState} {...routerProps} />}/>
              <Route exact path={USER_REGISTER}
                     component={(routerProps) => <EnhancedRegister loginState={loginState} {...routerProps} />}/>
              <Route exact path={USER_TOURNAMENT}
                     component={(routerProps) => <EnhancedTournament loginState={loginState} {...routerProps} />}/>
              <Route exact path={USER_GAMES}
                     component={(routerProps) => <EnhancedGame loginState={loginState} {...routerProps} />}/>
              <Route component={Home}/>
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps)(App);
