// LIBRARIES
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// SET SCHEMA
const UserSchema = new Schema({
  fullname: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
})

// SET MODEL
module.exports = mongoose.model('User', UserSchema)
