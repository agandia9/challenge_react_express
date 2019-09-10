import React, { PureComponent } from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom'

export class Sidebar extends PureComponent {
  render() {
    return (
      <div className="sidenav-main">
        <h2>Acciones</h2>
        <div className="sidenav-main-section">
          <NavLink activeClassName="active" to={"/info"}>Info usuario</NavLink>
        </div>
        { this.props.isAdmin ?
        <div>
          <div className="sidenav-main-section">
            <NavLink activeClassName="active" to={"/update"}>Crear o modificar usuario</NavLink>
          </div>
          <div className="sidenav-main-section">
            <NavLink activeClassName="active" to={"/list"}>Lista de usuarios</NavLink>
          </div>
        </div> : null
        }
        
      </div>
    );
  }
}

export default Sidebar;
