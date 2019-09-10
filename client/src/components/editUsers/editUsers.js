import React, { Component } from 'react'
import './editUsers.css'
import service from '../../services/api'
import storage from '../../services/storage'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton'
import swal from 'sweetalert2'

export class EditUsers extends Component {
    state = {userList: [], rows: [], userToModify:{}, createUser: false}
    componentDidMount = () => {
        service.listUsers(storage.getToken()).then(res => {
            this.setState({userList: res.users})
        })
    }

    handleChange = (e) =>{
        this.setState({ userToModify: e.target.value, createUser: false}, ()=> {
            // console.log(this.state)
        })
        
    }
    handleChangeInput = (e) => {
        let userToModify = {...this.state.userToModify}
        userToModify[`${e.target.name}`] = e.target.value;
        
        
        this.setState({userToModify}, () => {
            // console.log(this.state)
        })
    }
    handleAction = () => {
        this.state.createUser ?
        service.createUsers(this.state.userToModify.name, this.state.userToModify.surname, this.state.userToModify.password, this.state.userToModify.email, this.state.userToModify.permissions, storage.getToken()).then(res => {
            service.listUsers(storage.getToken()).then(res => {
                
                this.setState({userList: res.users}, () => {
                    swal.fire(
                        'Usuario creado correctamente',
                        '',
                        'success'
                      )
                })
            })
        })
        :
        service.updateUsers(this.state.userToModify._id, this.state.userToModify.name, this.state.userToModify.surname, this.state.userToModify.password, this.state.userToModify.email, this.state.userToModify.permissions, storage.getToken()).then(res => {
            service.listUsers(storage.getToken()).then(res => {
                this.setState({userList: res.users}, () => swal.fire(
                    'Usuario editado correctamente',
                    '',
                    'success'
                  ))
            })
        })
        
    }
    handleAddUser = () => {
        let userToModify = {
            name:"", surname:"", password:"", email:"", permissions:""
        }
        this.setState({userToModify, createUser: true}, () => {
            // console.log(this.state)
        })
    }
    render(){
        return(
                <div className="edit-users-main">
                    <div className="edit-users-button">
                        <IconButton onClick={this.handleAddUser} aria-label="Añadir">
                                <Add />
                        </IconButton>  
                    </div>
                    <div>
                        <FormControl>
                            <InputLabel htmlFor="name-helper">Edición usuarios</InputLabel>
                                <Select
                                value={ this.state.userToModify }
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'name-helper',
                                }}
                                >  
                                    <MenuItem value={{}}>
                                        <em>Sin selección</em>
                                    </MenuItem>
                                    {
                                        this.state.userList.map(user =>{
                                            return <MenuItem key={user._id} value={user}>{ user.name } - { user.surname }</MenuItem>
                                        })
                                    }
                                    
                                </Select>
                            
                            <FormHelperText>Selecciona el usuario a editar</FormHelperText>
                        </FormControl>
                    </div>
                    <hr></hr>
                    {
                        Object.keys(this.state.userToModify).length ? 
                        <div > 
                        <span className="edit-users-title"> <p> {
                            this.state.createUser ? "Creando nuevo usuario"  : "Editando el usuario con id " + this.state.userToModify._id
                        } </p> </span>
                        <div className="edit-users-form">
                            <label>
                                    Nombre:
                                <Input type="text" value={this.state.userToModify.name} name="name" onChange={this.handleChangeInput} />
                            </label>
                            <label>
                                    email:
                                <Input type="email" value={this.state.userToModify.email} name="email" onChange={this.handleChangeInput} />
                            </label>
                            <label>
                                    Apellido:
                                <Input type="text" value={this.state.userToModify.surname} name="surname" onChange={this.handleChangeInput} />
                            </label>
                            <label>
                                    Contraseña:
                                <Input type="password" value={this.state.userToModify.password} name="password" onChange={this.handleChangeInput} />
                            </label>
                            <Select
                                value={this.state.userToModify.permissions || "0"}
                                onChange={this.handleChangeInput}
                                name="permissions"
                                >
                                    <MenuItem  value="0">Selecciona un permiso</MenuItem>
                                    <MenuItem  value="ADMIN_PERMISSION">ADMIN_PERMISSION</MenuItem>
                                    <MenuItem  value="USER_PERMISSION">USER_PERMISSION</MenuItem>
                                    
                                </Select>

                        </div>
                            <Button variant="contained" color="primary" onClick={this.handleAction}>
                                {   
                                    this.state.createUser ? "Crear usuario" : "Modificar usuario"
                                }
                                
                            </Button>
                        </div>
                        : null
                    }
                  </div>
        )
    }
}