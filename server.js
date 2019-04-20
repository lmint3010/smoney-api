// Enviroment configuation
require('dotenv').config()

const port = process.env.PORT || 3000
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

// Mongoose
const mongoUri = process.env.MONGO_URI_DEV
require('./utils/mongoose')(mongoUri)

// Body Parser
const { urlencoded, json: bodyParserJson } = require('body-parser')
app.use(urlencoded({ extended: false }))
app.use(bodyParserJson())

// Routes
require('./utils/status')(app)
require('./routes')(app)

app.listen(port, () => {
  app.get('/', (_, res) => res.send(`Server is running on ${port}`))
})
