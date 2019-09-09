import React,{ Component } from 'react';
import api from '../../services/api'
import storage from '../../services/storage'
import { Route } from 'react-router-dom'
import { Sidebar } from '../sidebar/sidebar'
import { Welcome } from '../welcome/welcome'
import { Header } from '../header/header'
import './main.css';

export class Main extends Component {
 
  state = { newInfoUser: {}, isAdmin: false }

  componentDidMount(){
    api.listUsers(storage.getToken()).then(res => {
      let {isAdmin} = res.data
      this.setState({
        isAdmin
      })
      this.props._handlerUserInfo(res.data)})
      .catch(err => {
        this.props._handleLogout()
      })
  }

  _passToNav = (newInfoUser)=>{
    this.setState({
      newInfoUser
    })
  }

  render() {
    return (
			<div className="App">
        <div className="header-div" >
             <Header 
              
              _handleLogout={this.props._handleLogout} 
              userInfo={this.props.userInfo}
              isAdmin={this.state.isAdmin}
            />
            </div>
            <div className="sidebar-div">
                <Sidebar 
                  userInfo={this.props.userInfo} 
                  newInfoUser={this.state.newInfoUser}
                />
            </div> 
            <div className="main-div">
								<Route 
                  exact path={'/'}
                  component={Welcome}
								/>
								{/* <Route 
                  exact path={'/subject/:nsubject'}
                  render={(props) => <Subject 
                                        userInfo={this.props.userInfo} 
                                        info={props}
                                        _passToNav={this._passToNav}
                                      />}
								/>
                <Route
                  path={'/profile/:username'}
                  render={(props) => <Profile 
                    _handleLogout={this.props._handleLogout} 
                    
                  />}
                />
                {
                  this.state.isAdmin ? 
                    <Route
                    path={'/admin'}
                    component={Admin}
                  />
                  : undefined
                } */}
            </div>
        </div>
				

    );
  }
}