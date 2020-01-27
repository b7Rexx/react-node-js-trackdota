import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Dropdown extends Component {
  getDropdownContent() {
    return (
      this.props.dropdownContent.map((item, index) => {
        return item.to ? (
          <Link key={index} className='dropdown-item' to={item.to} onClick={item.onClick}>{item.link}</Link>
        ) : (
          <a key={index} href={item.link} className='dropdown-item' onClick={item.onClick}>{item.link}</a>
        );
      })
    );
  }

  render() {
    return (
      <>
        <div className='dropdown'>
          <div className='dropdown-toggle'>
            <i className={this.props.icon}/>
            <img className='dropdown-image' src={this.props.image} alt=""/>
            {this.props.link}
          </div>
          <div className='dropdown-menu'>
            {this.getDropdownContent()}
          </div>
        </div>
      </>
    );
  }
}

export default Dropdown;