'use strict'

const rp = require('request-promise')

const api = {
    
    _baseUrl(){
        return `${this.protocol}://${this.host}/api`
    },

    _call(method,path,body,token){

        const options = {
            method,
            url: `${this._baseUrl()}/${path}`,
            json: true
        }

        if(body) options.body = body

        if(token) options.headers = { authorization: `Bearer ${token}` }

        return rp(options)
    },

    login: function login(email, password) {
        return this._call('post', 'login', { email: email, password: password });
    },
    listUsers: function listUsers() {
        return this._call('get', 'list');
    },
    getUser: function getUser(id) {
        return this._call('get', 'user/' + id);
    },
    createUsers: function createUsers(name, surname, password, email, permissions) {
        return this._call('post', 'create', { name, surname, password, email, permissions });
    },
    updateUsers: function updateUsers(id, name, surname, password, email, permissions) {
        return this._call('put', 'update/' + id, { name, surname, password, email, permissions });
    },
    deleteUsers: function deleteUsers(id) {
        return this._call('delete', 'delete/' + id);
    }

    
    
}

module.exports = api