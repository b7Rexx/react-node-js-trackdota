import React, {Component} from 'react';
import Header from "./layout/header";
import Login from "./pages/login";
import Register from './pages/register';

class User extends Component {

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

export default User;
