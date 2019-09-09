import React, { Component } from 'react'
import './login.css'

import service from '../../services/api'
export class Login extends Component {

    state = {
        email: '',
        password: ''
    }  
    _handleChangeUser = (e) =>{
        this.setState({
            email: e.target.value
        })
    }
    _handleChangePassword = (e) =>{
        this.setState({
            password: e.target.value
        })
    }
    _handleLogin = (e)=> {
        e.preventDefault()
        const {email, password} = this.state
        return service.login(email, password)
            .then(res=>{
                
                if(res.ok){
                    this.props._handlerUserInfo(res.users)
                    this.props._handleIsLogged(res.token)
                    // swal({
                    //     title: 'Logged',
                    //     text: `Welcome again ${email}`,
                    //     type:'success',
                    //     timer: 1500,
                    //     showConfirmButton: false,
                    // })
                }else{
                    // swal('Error', 'email or Password not correct', 'error')
                }
            })
            //not works.... for when lost connection with heroku  
            .catch((err)=>{
                // swal('Error', err,'')
            })
    }
    render(){
        return(
            <div className="form-login">
                <p className="description">:)</p>
                <form onSubmit={this._handleLogin}>
                    <div className="field">
                            <input 
                                className="input input-login" 
                                type="text"
                                placeholder="email"
                                required
                                onChange={this._handleChangeUser}
                            />

                        
                        </div>
                        <div className="field">
                        
                            <input 
                                className="input input-login" 
                                type="password" 
                                placeholder="password" 
                                required
                                onChange={this._handleChangePassword}
                            />
                        
                        </div>
                        <div className="field">
                            <p className="control">
                                <button className="button is-success" type="submit">
                                Login
                                </button>
                            </p>
                    </div>
                </form>
            </div>
        )
    }
}