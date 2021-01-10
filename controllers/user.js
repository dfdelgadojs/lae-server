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
   },
   FetchUserData: (req, res, next) => {
      const query = UserModel.findById(req.user).select('-password')
      query.exec((error, user) => {
         if (error) {
            return next(error)
         } else {
            return res.status(200).send(user)
         }
      })
   },
   FetchUsers: (req, res, next) => {
      const query = UserModel.find({})
      query.exec((error, users) => {
         if (error) {
            return next(error)
         } else if (users.length === 0) {
            const newUsers = [
               {
                  id: 1,
                  firstname: 'Daniel',
                  lastname: 'Delgado',
                  phone: '3108699474',
                  email: 'ddelgado.js@gmail.com',
                  status: true
               },
               {
                  id: 2,
                  firstname: 'Elon',
                  lastname: 'Musk',
                  phone: '3154588070',
                  email: 'elon@gmail.com',
                  status: true
               },
               {
                  id: 3,
                  firstname: 'Bill',
                  lastname: 'Gates',
                  phone: '3205874150',
                  email: 'bill@gmail.com',
                  status: true
               },
               {
                  id: 1,
                  firstname: 'Steve',
                  lastname: 'Jobs',
                  phone: '3148054258',
                  email: 'steve@gmail.com',
                  status: true
               }
            ]
            const query = UserModel.insertMany(newUsers)
            query.exec((error, usersSaved) => {
               if (error) {
                  return next(error)
               } else {
                  return res.status(200).send(usersSaved)
               }
            })
         } else {
            return res.status(200).send(users)
         }
      })
   }
}
