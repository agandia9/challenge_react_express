'use strict';

var rp = require('request-promise');

var api = {
    _baseUrl: function _baseUrl() {
        return this.protocol + '://' + this.host + '/api';
    },
    _call: function _call(method, path, body, token) {

        var options = {
            method: method,
            url: this._baseUrl() + '/' + path,
            json: true
        };

        if (body) options.body = body;

        if (token) options.headers = { authorization: 'Bearer ' + token };

        return rp(options);
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
        return this._call('post', 'create', { name: name, surname: surname, password: password, email: email, permissions: permissions });
    },
    updateUsers: function updateUsers(id, name, surname, password, email, permissions) {
        return this._call('put', 'update/' + id, { name: name, surname: surname, password: password, email: email, permissions: permissions });
    },
    deleteUsers: function deleteUsers(id) {
        return this._call('delete', 'delete/' + id);
    }

};

module.exports = api;
