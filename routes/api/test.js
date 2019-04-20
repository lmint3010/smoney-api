const express = require('express')
const route = express.Router()


route.get('/test', (req, res) => {
    res.json({status: 'success'})
})

module.exports = route
