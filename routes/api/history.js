const express = require('express')
const routes = express.Router()

const addHistory = require.main.require('./controllers/api/history/add')
const deleteHistory = require.main.require('./controllers/api/history/delete')
const updateHistory = require.main.require('./controllers/api/history/update')
const getSpend = require.main.require('./controllers/api/history/getSpend')

routes.post('/', addHistory)
routes.delete('/', deleteHistory)
routes.put('/', updateHistory)
// get history of spend
routes.get('/spend', getSpend)

module.exports = routes
