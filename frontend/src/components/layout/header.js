import React, {Component} from 'react';
import logoHeader from '../../assets/logo.png';
import {Link} from 'react-router-dom';
import {HOME, USER, USER_FAVOURITE, USER_LOGIN, USER_PROFILE} from '../../constants/routes';
import {formatRoute} from 'react-router-named-routes';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {loginState: state.user.loginState};
};

function mapDispatchToProps(dispatch) {
  return {};
}

class Header extends Component {

  getUserHeader() {
    if (this.props.loginState)
      return (
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link to={formatRoute(USER_PROFILE)}>
              <i className='fa fa-user-circle-o'/> Profile
            </Link>
          </li>
        </ul>
      );
    else
      return (
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link to={formatRoute(USER_LOGIN)}>
              <i className='fa fa-user-circle-o'/> Login
            </Link>
          </li>
        </ul>
      );
  }

  getFavourite() {
    return (
      <li className='nav-item'>
        <Link to={formatRoute(USER_FAVOURITE)}>
          <i className='fa fa-star'/> Favourite
        </Link>
      </li>
    );
  }

  render() {
    return (
      <div className='header'>
        <nav className='navbar navbar-expand-lg'>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
              <li className=''>
                <Link to={formatRoute(HOME)}>
                  <figure className='logo'>
                    <img src={logoHeader} alt='logo'/>
                  </figure>
                </Link>
              </li>
              {this.props.loginState ? this.getFavourite() : ''}
            </ul>
            {this.props.match.path !== formatRoute(USER) ? this.getUserHeader() : ''}
          </div>
        </nav>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
