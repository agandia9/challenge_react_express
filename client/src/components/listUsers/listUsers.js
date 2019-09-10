import React, { Component } from 'react'
import './listUsers.css'
import service from '../../services/api'
import storage from '../../services/storage'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';


export class ListUsers extends Component {
    state = {userList: [], rows: []}
    // classes = this.useStyles();

    componentDidMount = () => {
        
        service.listUsers(storage.getToken()).then(res => {
            this.setState({userList: res.users}, () => {
                this.setState({rows: res.users
              
                }, () => {
                    //   console.log(this.state)
                  });
            })
        })
        
    }

    handleDeleteUser = ( user ) => {
        service.deleteUsers(user._id, storage.getToken()).then(res => {
            console.log(res)
        })
    }
    render(){
        return(
                  <Paper>
                    <Table >
                      <TableHead>
                        <TableRow>
                          <TableCell>Nombre</TableCell>
                          <TableCell align="right">Email</TableCell>
                          <TableCell align="right">Apellido</TableCell>
                          <TableCell align="right">Permiso</TableCell>
                          <TableCell align="right">Acción</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {this.state.rows.map(row => (
                          <TableRow key={row.name}>
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.surname}</TableCell>
                            <TableCell align="right">{row.permissions}</TableCell>
                            <TableCell align="right"><Button onClick={() => this.handleDeleteUser(row)}> ❌ </Button></TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    
                  </Paper>
        )
    }
}