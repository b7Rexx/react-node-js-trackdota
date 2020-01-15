import React, {Component} from 'react';
// import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Login from './components/login';
import {connect} from "react-redux";
import {loginStatus} from "./actions";

const mapStateToProps = state => {
  return state;
};

function mapDispatchToProps(dispatch) {
  return {
    loginStatus: (data) => (dispatch(loginStatus(data))),
  };
}

class ConnectedApp extends Component {

  render() {
    return (
      <div className='container'>
        <Login/>
      </div>
    );
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);

export default App;