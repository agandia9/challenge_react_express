import React, { PureComponent } from 'react'
import './infoUser.css'

export class InfoUser extends PureComponent {
    
    componentDidMount = () => {
        
        
    }
    render(){
        return(
            <div className="welcome-info">
                <h3> Bienvenido/a </h3>
                <div className="info-user-main">
                    <span><p> <strong> Email: </strong> { this.props.userInfo.email }</p> </span>
                    <span><p> <strong> Nombre: </strong> { this.props.userInfo.name } </p> </span>
                    <span><p> <strong> Apellido: </strong>  { this.props.userInfo.surname } </p></span>
                </div>
            </div>
        )
    }
}