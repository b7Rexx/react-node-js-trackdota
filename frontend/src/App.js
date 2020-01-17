import React, {Component} from 'react';
import {connect} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./components/header";

const mapStateToProps = state => {
  return state;
};

function mapDispatchToProps(dispatch) {
  return {
    loginStatus: (data) => (console.log('dispatch')),
  };
}

class App extends Component {

  render() {
    return (
      <>
        <Router>
          <Header/>
          <div className='container'>
          </div>
        </Router>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
