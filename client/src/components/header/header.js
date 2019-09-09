import React, { Component } from 'react';
import './header.css';
import storage from '../../services/storage'
export class Header extends Component {
  _handleLogout = ()=>{
    storage.removeToken()
    this.props._handleLogout()
    
}
  render() {
    return (
    <div className="header-fixed">
      <a className="active" href='/' onClick={this._handleLogout}>Logout</a>
    </div>
    );
  }
}

export default Header;
