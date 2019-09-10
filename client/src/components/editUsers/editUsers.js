import React, { Component } from 'react'
import './editUsers.css'
import service from '../../services/api'
import storage from '../../services/storage'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

export class EditUsers extends Component {
    state = {userList: [], rows: [], userToModify:{}}
    // classes = this.useStyles();

    componentDidMount = () => {
        
        service.listUsers(storage.getToken()).then(res => {
            this.setState({userList: res.users})
        })
        
    }

    handleChange = (e) =>{
        this.setState({ userToModify: e.target.value}, ()=> {
            console.log(this.state)
        }) 
    }
    handleChangeInput = (e) => {
        let userToModify = {...this.state.userToModify}
        userToModify[`${e.target.name}`] = e.target.value;
        
        console.log(userToModify)
        this.setState({userToModify}, () => {
            console.log(this.state)
        })
    }
    handleUpdateUser = () => {
        console.log(this.state.userToModify)
        service.updateUsers(this.state.userToModify._id, this.state.userToModify.name, this.state.userToModify.surname, this.state.userToModify.password, this.state.userToModify.email, this.state.userToModify.permissions, storage.getToken()).then(res => {
            console.log(res)
        })
    }
    render(){
        return(
                  <div>
                      <FormControl>
                        <InputLabel htmlFor="name-helper">name</InputLabel>
                            <Select
                            value={ this.state.userToModify }
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'name-helper',
                            }}
                            >
                                <MenuItem value={{}}>
                                    <em>None</em>
                                </MenuItem>
                                {
                                    this.state.userList.map(user =>{
                                        return <MenuItem value={user}>{ user.name } - { user.surname }</MenuItem>
                                    })
                                }
                                
                            </Select>
                        <FormHelperText>Some important helper text</FormHelperText>
                    </FormControl>
                    {
                        Object.keys(this.state.userToModify).length ? 
                        <div> 
                            <label>
                                    Name:
                                <input type="text" value={this.state.userToModify.name} name="name" onChange={this.handleChangeInput} />
                            </label>
                            <label>
                                    email:
                                <input type="text" value={this.state.userToModify.email} name="email" onChange={this.handleChangeInput} />
                            </label>
                            <label>
                                    surname:
                                <input type="text" value={this.state.userToModify.surname} name="surname" onChange={this.handleChangeInput} />
                            </label>
                            <label>
                                    password:
                                <input type="text" value={this.state.userToModify.password} name="password" onChange={this.handleChangeInput} />
                            </label>
                            <Select
                                value={this.state.userToModify.permissions}
                                onChange={this.handleChangeInput}
                                name="permissions"
                                >
                                    <MenuItem  value="ADMIN_PERMISSION">ADMIN_PERMISSION</MenuItem>
                                    <MenuItem  value="USER_PERMISSION">USER_PERMISSION</MenuItem>
                                    
                                </Select>
                            <Button variant="contained" color="primary" onClick={this.handleUpdateUser}>
                                Modificar usuario
                            </Button>
                        </div>
                        : null
                    }
                  </div>
        )
    }
}