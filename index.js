// IMPORT LIBRARIES
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

// IMPORT CONFIGS
const db = require('./configs/db')

// MONGOOSE SETTINGS
mongoose.connect(db.url, db.options)

// SERVER SETTINGS
const port = 8080
const app = express()

// EXPRESS SETTINGS
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))

// EXPRESS ROUTES
require('./routes/user')(app)
require('./routes/customer')(app)
require('./routes/task')(app)

// RUN SERVER
app.listen(port, () => {
  console.log('Server is now running at port: ', port)
})
