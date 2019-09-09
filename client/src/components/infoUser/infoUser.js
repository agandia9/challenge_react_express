import React, {Component } from 'react'
import './infoUser.css'
import api from '../../services/api'
import storage from '../../services/storage'

export class InfoUser extends Component {
    state = {isLogged: false, userInfo:{}}
    componentDidMount = ()=>{
        
        // console.log(this.props.userInfo)
    }
    render(){
        return(
            <div className="welcome-info">
                <h3> Bienvenido/a </h3>
                <div className="info">
                    <span><p>Email: </p> {this.props.userInfo.email} </span>
                    <span><p>Nombre: </p> { this.props.userInfo.name } </span>
                    <span><p>Apellido: </p> { this.props.userInfo.surname } </span>
                </div>
            </div>
        )
    }
}