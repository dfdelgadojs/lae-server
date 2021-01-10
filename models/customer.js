// LIBRARIES
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// SET SCHEMA
const CustomerSchema = new Schema({
  firstname: {
   type: String
  },
  lastname: {
   type: String
  },
  phone: {
   type: String
  },
  email: {
   type: String
  },
  status: {
   type: Boolean
  },
  id: {
    type: Number
  }
})

// SET MODEL
module.exports = mongoose.model('Customer', CustomerSchema)
