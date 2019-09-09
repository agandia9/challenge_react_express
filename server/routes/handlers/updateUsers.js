const logic = require('../../logic')
const bcrypt = require('bcrypt')
module.exports = (req, res) => {
    const { params : { id } } = req;
    const { body : { name, surname, password,email, permissions } } = req;
    logic.updateUsers(id, name, surname, password, email, permissions)
        .then(user => {
            res.status(200).json({
                ok: true,
                user
            })
        })
}