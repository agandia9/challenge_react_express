const logic = require('../../logic')
module.exports = (req, res) => {
    const { params : { id } } = req;
    logic.getUser(id)
        .then(user => {
            // if(!user)
            res.status(200).json({
                ok: true,
                user
            })
        })
}