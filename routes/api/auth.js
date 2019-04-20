const express = require('express')
const routes = express.Router()
const passport = require('passport')
const register = require.main.require('./controllers/api/users/register')
const login = require.main.require('./controllers/api/users/login')
const controller = {
  login,
  register,
}

routes.post('/login', controller.login)
routes.post('/register', controller.register)

module.exports = routes