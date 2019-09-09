const logic = require('../../logic')
// const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
module.exports = (req, res) => {
    let { body: { email, password }} = req;
    logic.login(email, password)
        .then(users => {

            if(!users) {
                res.status(404).json({
                    ok:false,
                    message: 'Usuario no encontrado'
                })
            }
            if (password !== users.password) {
                 res.status(400).json({
                    ok: false,
                    err: {
                        message: 'contraseña incorrecta'
                    }
                });
            }
            let token = jwt.sign({
                users
            }, process.env.SEED, { expiresIn: process.env.EXPIRED_TOKEN })
            res.status(200).json({
                ok: true,
                users,
                token
            })

        }).catch((err) => {
            res.status(400).json({
                ok: false,
                err
            });
        })
}
