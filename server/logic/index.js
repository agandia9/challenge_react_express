const { Users } = require('../models');
const mongoose = require('mongoose')
module.exports = {
    listUsers() {
        return Users.find({})
        // .skip(page)
        // .limit(pagination)
    },

    getUser(id) {
        return Users.findById({_id: id})
    },

    createUsers(name, surname,password, email,  permissions) {
        return Users.create({name, surname, password, email, permissions})
    },

    updateUsers(id, name, surname, password, email, permissions) {
        return Users.findByIdAndUpdate({_id: id}, {name, surname, password, email, permissions})
    },

    deleteUsers(id) {
        return Users.findByIdAndDelete({_id: id})
    },

    login(email, password){
        return Users.findOne({ email: email, password: password })
    }
}