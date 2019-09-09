import React,{ Component } from 'react';
import { Route } from 'react-router-dom'
import { Sidebar } from '../sidebar/sidebar'
import { InfoUser } from '../infoUser/infoUser'
import { Header } from '../header/header'
import './main.css';

export class Main extends Component {
 
  state = { userInfo: {}, isAdmin: false }

  componentDidMount(){
    this.setState({userInfo: this.props.userInfo, isAdmin: this.props.userInfo.permissions !== 'ADMIN_PERMISSION' ? true : false})
  }


  render() {
    return (
			<div className="App">
        <div className="header-div" >
             <Header 
              
              _handleLogout={this.props._handleLogout} 
              userInfo={this.state.userInfo}
              isAdmin={this.state.isAdmin}
            />
            </div>
            <div className="sidebar-div">
                <Sidebar 
                  userInfo={this.state.userInfo} 
                  newInfoUser={this.state.newInfoUser}
                />
            </div> 
            <div className="main-div">
                <Route 
                  
                  exact path={'/'}
                  component={ () => <InfoUser userInfo={this.state.userInfo} />}
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
                />*/}
                {
                  this.state.isAdmin ? 
                    <div>
                      <Route
                      path={'/create'}
                      component={InfoUser}
                      />
                      <Route
                        path={'/update'}
                        component={InfoUser}
                      />
                      <Route
                        path={'/list'}
                        component={InfoUser}
                      />
                  </div>
                  
                  : undefined
                } 
            </div>
        </div>
				

    );
  }
}