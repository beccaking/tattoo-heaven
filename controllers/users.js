const express = require('express')
const router = express.Router()
const User = require('../models/users.js')

router.get('/new', (req, res) => {
  res.render('users/new.ejs')
})

router.post('/', (req, res) => {
  User.create(req.body, (error, createdUser) => {
    req.session.username = createdUser.username
    res.redirect('/tattoos')
  })
})

module.exports = router
