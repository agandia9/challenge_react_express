require('dotenv').config()
const mongoose = require('mongoose');
const { Users } = require('../models')
module.exports = {
    createInitUsers() {
        Users.find({}).then(res => {
            if(!res.length){
                user1 = new Users ({
                    name: 'admin',
                    surname: 'admin',
                    email: 'admin@admin.com',
                    password: 'admin',
                    permissions: 'ADMIN_PERMISSION',
                })
                user2 = new Users ({
                    name: 'user',
                    surname: 'user',
                    email: 'user@user.com',
                    password: 'user',
                    permissions: 'USER_PERMISSION',
                })
                return Promise.all([user1.save(), user2.save()])
            } else {
                console.log('Ya existen usuarios')
                return null;
            }
        })
    }
}