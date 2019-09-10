const mongoose = require('mongoose')

const { Schema } = mongoose;

let validPermissions = {
    values: [ 'ADMIN_PERMISSION', 'USER_PERMISSION' ],
    message: '{VALUE} Is not a valid permission.'
}

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    permissions: {
        type: String,
        default: 'USER_PERMISSION',
        enum: validPermissions
    },

})