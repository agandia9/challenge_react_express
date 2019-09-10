import React, { Component } from 'react';
import './header.css';
import storage from '../../services/storage'
import IconButton from '@material-ui/core/IconButton'
import ExitToApp from '@material-ui/icons/ExitToApp';

export class Header extends Component {
  _handleLogout = ()=>{
    storage.removeToken()
    this.props._handleLogout()
    
}
  render() {
    return (
    <div className="header-fixed">
      <div >
      <IconButton onClick={this._handleLogout} color="primary" size="medium"  aria-label="exit">
        <ExitToApp fontSize="large" />
      </IconButton>  
      </div>
    </div>
    );
  }
}

export default Header;
