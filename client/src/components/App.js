import React, { Component } from 'react';
import './App.css';
import {Main} from './main/main';

import storage from '../services/storage'

import {Login} from './login/login'

class App extends Component {
  state = {isLogged: false, userInfo:{}}

  componentDidMount (){
    console.log(this.state, storage.getToken()) 
    return storage.getToken() ? this.setState({isLogged:true}) : undefined
     
  }

  _handleIsLogged =(token)=>{
    storage.setToken(token)
    this.setState({isLogged:true})
    console.log(this.state.isLogged)
  }

  _handlerUserInfo = (userInfo) => {
    this.setState({
      userInfo
    })
  }
  _handleLogout = ()=>{
    this.setState({
      isLogged: false
    })
  }


  render() {
    const Logged = this.state.isLogged 
    ? <Main 
      _handlerUserInfo={this._handlerUserInfo}
      _handleLogout={this._handleLogout}
      userInfo={this.state.userInfo}
      />
    : <Login _handleIsLogged={this._handleIsLogged}/>
  

  return(
    Logged
  )
  }
}

export default App;