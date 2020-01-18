import React, {Component} from 'react';
import Header from '../layout/header';

class Home extends Component {
  render() {
    return (
      <>
        <Header {...this.props}/>
        Home
      </>
    );
  }
}

export default Home;