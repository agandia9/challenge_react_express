const logic = require('../../logic')
// const bcrypt = require('bcrypt')
module.exports = (req, res) => {
    const { body : { name, surname, password, email, permissions } } = req;
    logic.createUsers(name, surname, password, email, permissions)
    // password = bcrypt.hashSync(password, 10)
        .then((user) => {
            res.status(200).json({
                ok: true,
                user
            })
        }).catch(err => {
            
                res.status(400).json({
                    ok: false,
                    error: err
                    // .errors.permissions.message
                })
            
        })
}