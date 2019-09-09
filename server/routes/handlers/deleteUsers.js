const logic = require('../../logic')
module.exports = (req, res) => {
    const { params : { id } } = req;
    logic.deleteUsers(id)
        .then(() => {
            res.status(200).json({
                ok: true
            })
        })
}