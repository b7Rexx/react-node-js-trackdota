import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {USER} from './constants/routes';
import User from './components/user';
import Home from './components/pages/home';
import bgWrapper from './assets/main-bg.jpg';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginStatus: (data) => (console.log('dispatch')),
  };
};

class App extends Component {

  render() {
    return (
      <>
        <figure className='bg-wrapper'>
          <img src={bgWrapper} alt='bg'/>
        </figure>
        <div className='container'>
          <Router>
            <Switch>
              <Route path={USER} component={(routerProps) => <User {...routerProps}/>}/>
              <Route component={(routerProps) => <Home {...routerProps}/>}/>
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
