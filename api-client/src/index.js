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

        if(token) options.headers = { token: `${token}` }

        return rp(options)
    },

    login(email, password) {
        return this._call('post', 'login', { email: email, password: password });
    },
    listUsers(token) {
        return this._call('get', 'list', undefined, token);
    },
    getUser(id, token) {
        return this._call('get', 'user/' + id, undefined, token);
    },
    createUsers(name, surname, password, email, permissions, token) {
        return this._call('post', 'create', { name, surname, password, email, permissions }, token);
    },
    updateUsers(id, name, surname, password, email, permissions, token) {
        return this._call('put', 'update/' + id, { name, surname, password, email, permissions }, token);
    },
    deleteUsers(id, token) {
        return this._call('delete', 'delete/' + id, undefined, token);
    }

    
    
}

module.exports = api