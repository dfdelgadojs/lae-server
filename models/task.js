// LIBRARIES
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// SET SCHEMA
const TaskSchema = new Schema({
  title: {
     type: String
  }
})

// SET MODEL
module.exports = mongoose.model('Task', TaskSchema)
