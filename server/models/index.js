const mongoose = require('mongoose');
const { Users } = require('./schemas')

module.exports = {
    Users: mongoose.model('Users', Users)
}