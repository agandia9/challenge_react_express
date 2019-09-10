import React, { PureComponent } from 'react'
import './infoUser.css'

export class InfoUser extends PureComponent {
    
    componentDidMount = () => {
        
        
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