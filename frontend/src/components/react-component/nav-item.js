import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavItem extends Component {

  getLink() {
    if (this.props.to)
      return (<Link to={this.props.to}>
        <i className={this.props.icon}/> {this.props.link}
      </Link>);
    else
      return (<>
        <i className={this.props.icon}/> {this.props.link}
      </>);

  }

  render() {
    return (
      <>
        <li className={this.props.className ?? 'nav-item'}>
          {this.getLink()}
        </li>
      </>
    );
  }
}

export default NavItem;
