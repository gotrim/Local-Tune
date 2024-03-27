const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('login')
})

router.get('/cadastro', (req, res) => {
    res.render('cadastro')
})

router.get('/index', (req, res) => {
    res.render('index')
})

module.exports = router