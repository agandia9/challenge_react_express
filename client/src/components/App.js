import React, { Component } from 'react';
import './App.css';
import {Main} from './main/main';
import storage from '../services/storage'
import {Login} from './login/login'

class App extends Component {
  state = {isLogged: false, userInfo:{}}

  componentDidMount = ()=>{
    !Object.keys(this.state.userInfo).length ? this.setState({userInfo:storage.getUser()}) : undefined
    
    return storage.getToken() ? this.setState({isLogged:true}) : undefined
  }

  _handleIsLogged =(token)=>{
    
    storage.setToken(token)
    this.setState({isLogged:true})
  }

  _handlerUserInfo = (userInfo) => {
    this.setState({
      userInfo
    })
    storage.setUser(userInfo)
  }
  _handleLogout = ()=>{
    this.setState({
      isLogged: false
    },() => {
     
    })
    
  }


  render() {
    const Logged = this.state.isLogged 
    ? <Main 
      _handlerUserInfo={this._handlerUserInfo}
      _handleLogout={this._handleLogout}
      userInfo={this.state.userInfo}
      />
    : <Login _handleIsLogged={this._handleIsLogged} _handlerUserInfo={this._handlerUserInfo}/>
  

  return(
    Logged
  )
  }
}

export default App;