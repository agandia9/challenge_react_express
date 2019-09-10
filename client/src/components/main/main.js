import React,{ Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { Sidebar } from '../sidebar/sidebar'
import { InfoUser } from '../infoUser/infoUser'
import { Header } from '../header/header'
import { ListUsers } from '../listUsers/listUsers'
import { EditUsers } from '../editUsers/editUsers'
import './main.css';

export class Main extends Component {
 
  state = { userInfo: {}, isAdmin: false }

  componentDidMount(){
    this.setState({userInfo: this.props.userInfo, isAdmin: this.props.userInfo.permissions === "ADMIN_PERMISSION" ? true : false}
    // , () => console.log(this.state)
    )
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
                  isAdmin={this.state.isAdmin}
                />
            </div> 
            <div className="main-div">
                <Route 
                  exact path={'/info'}
                  component={ () => <InfoUser userInfo={this.state.userInfo} />}
								/>
                 <Route 
                  exact path={'*'}
                  component={ () => <Redirect to="/info" />}
								/>
                {
                  this.state.isAdmin ? 
                    <div>
                      <Route
                        exact path={'/update'}
                        component={EditUsers}
                      />
                      <Route
                        exact path={'/list'}
                        component={ListUsers}
                      />
                  </div> 
                  : undefined
                } 
            </div>
        </div>
				

    );
  }
}