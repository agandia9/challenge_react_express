const jsonwebtoken = require('jsonwebtoken')

verifyPermission = (req, res, next) => {
    let users = req.users
    if(users.permissions === 'ADMIN_PERMISSION') {
        next();
    } else {
        return res.json({
            ok:false,
            err: {
                mssg: 'El usuario no es administrador'
            }
        })
    }
}


verifyToken = (req, res, next) => {
    let token = req.get('token')
    jsonwebtoken.verify(token, process.env.SEED, (err, decoded)=> {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido',
                    err
                }
            })
        }

        req.users = decoded.users;

        next();
    })
}

module.exports = { verifyPermission, verifyToken };