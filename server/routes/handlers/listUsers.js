const logic = require('../../logic')
module.exports = (req, res) => {
    let page = req.query.page || 0;
    let pagination = req.query.pagination || 5;
    page = Number(page)
    pagination = Number(pagination)
    logic.listUsers(page, pagination)
        .then(users => {
            res.status(200).json({
                ok: true,
                users
            })
        })
}