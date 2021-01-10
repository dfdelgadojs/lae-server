// IMPORT LIBRARIES
const jwt = require('jsonwebtoken')

// IMPORT DATA MODELS
const UserModel = require('../models/user')

// EXPORT CONTROLLERS
module.exports = {
   CreateUser: (req, res, next) => {
      const NewUser = new UserModel({
         ...req.body
      })
      NewUser.save((error, user) => {
         if (error) {
            return next(error)
         } else {
            const token = jwt.sign({ user: user._id }, 'LAEServer')
            return res.status(200).send(token)
         }
      })
   },
   LoginUser: (req, res, next) => {
      const query = UserModel.findOne({ email: req.body.email })
      query.exec((error, user) => {
         if (error) {
            return next(error)
         } else if (!user) {
            return res.status(401).end()
         } else if (user.password !== req.body.password) {
            return res.status(401).end()
         } else {
            const token = jwt.sign({ user: user._id }, 'LAEServer')
            return res.status(200).send(token)
         }
      })
   }
}
