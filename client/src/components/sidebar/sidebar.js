import React, { Component } from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom'

export class Sidebar extends Component {
  render() {
    return (
      <div className="sidenav-main">
        <h2>Acciones</h2>
        <div className="sidenav-main-section">
          <NavLink to={"/"}>Info usuario</NavLink>
        </div>
        {/* is admin????? */}
        <div className="sidenav-main-section">
          <NavLink to={"/create"}>Crear usuario</NavLink>
        </div>
        <div className="sidenav-main-section">
          <NavLink to={"/update"}>Modificar usuario</NavLink>
        </div>
        <div className="sidenav-main-section">
          <NavLink to={"/list"}>Lista de usuarios</NavLink>
        </div>
      </div>
    );
  }
}

export default Sidebar;
