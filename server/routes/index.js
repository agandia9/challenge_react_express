const express = require('express');
const { listUsers, createUsers, getUser, deleteUsers, updateUsers, login } = require('./handlers');
const bodyParser = require('body-parser');
const jsonBodyParser = bodyParser.json();
const {verifyPermission, verifyToken} = require('../middlewares/permissions');
const router = express.Router()

router.get('/user/:id', verifyToken ,getUser)

router.get('/list', verifyToken ,listUsers)
router.post('/create', [ jsonBodyParser, verifyToken, verifyPermission ] , createUsers)
router.post('/login', [ jsonBodyParser ] , login)
router.put('/update/:id', [ jsonBodyParser, verifyToken, verifyPermission ] ,updateUsers)
router.delete('/delete/:id', [verifyToken, verifyPermission] , deleteUsers)

module.exports = router;