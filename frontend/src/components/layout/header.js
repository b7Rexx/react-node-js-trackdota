import React, {Component} from 'react';
import logoHeader from '../../assets/logo.png';
import {HOME, USER_FAVOURITE, USER_LOGIN, USER_TOURNAMENT} from '../../constants/routes';
import {connect} from 'react-redux';
import NavItem from '../react-component/nav-item';
import Dropdown from '../react-component/dropdown';
import {logoutAction} from "../../actions/user-action";
import {getUserData} from "../../store/local-storage";

const mapStateToProps = state => {
  return {loginState: state.user.loginState, userInfo: getUserData()};
};

function mapDispatchToProps(dispatch) {
  return {
    logoutAction: () => dispatch(logoutAction())
  };
}

class Header extends Component {

  logoutAction(e) {
    e.preventDefault();
    this.props.logoutAction();
  }

  getUserHeader() {
    let userDropdown = [
      {link: 'My Tournaments', to: USER_TOURNAMENT},
      {link: 'Logout', onClick: (e) => this.logoutAction(e)},
    ];
    if (this.props.loginState)
      return (
        <ul className='navbar-nav'>
          <li>
            <Dropdown icon='fa fa-user-circle-o'
                      link={`${this.props.userInfo.firstName || ''} ${this.props.userInfo.lastName || ''}`}
                      dropdownContent={userDropdown}/>
          </li>
        </ul>
      );
    else
      return (
        <ul className='navbar-nav'>
          <NavItem to={USER_LOGIN} icon='fa fa-key' link='Login'/>
        </ul>
      );
  }

  getFavourite() {
    return (
      <NavItem to={USER_FAVOURITE} icon='fa fa-star' link='Favourite'/>
    );
  }

  render() {
    return (
      <div className='header'>
        <nav className='navbar navbar-expand-lg'>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
              <NavItem to={HOME} className=''
                       link={<figure className='logo'><img src={logoHeader} alt='logo'/></figure>}/>
              {this.props.loginState ? this.getFavourite() : ''}
            </ul>
            {this.getUserHeader()}
          </div>
        </nav>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
