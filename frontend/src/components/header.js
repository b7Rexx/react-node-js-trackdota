import React, {Component} from 'react';
import logoHeader from '../assets/logo.png';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = state => {
  return {loginStatus: state.user.loginStatus};
};

function mapDispatchToProps(dispatch) {
  return {};
}

class Header extends Component {

  getUserHeader() {
    if (this.props.loginStatus)
      return (
        <>
          <i className="fa fa-user-circle-o"/> Profile
        </>
      );
    else
      return (
        <>
          <i className="fa fa-user-circle-o"/> Login/Signup
        </>
      );
  }

  getFavourite() {
    return (
      <Link to="/user">
        <li className="nav-item">
          <figure className="logo">
            <img src={logoHeader} alt="logo"/>
          </figure>
        </li>
      </Link>
    );
  }

  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <figure className="logo">
                  <img src={logoHeader} alt="logo"/>
                </figure>
              </li>
              {this.props.loginStatus ? this.getFavourite() : ''}
            </ul>
            <ul className="navbar-nav">
              <Link to="/user">
                <li className="nav-item">
                  {this.getUserHeader()}
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
