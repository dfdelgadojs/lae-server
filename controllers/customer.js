// IMPORT LIBRARIES
const jwt = require('jsonwebtoken')

// IMPORT DATA MODELS
const CustomerModel = require('../models/customer')

// EXPORT CONTROLLERS
module.exports = {
   FetchCustomers: (req, res, next) => {
      const query = CustomerModel.find({})
      query.exec((error, customers) => {
         if (error) {
            return next(error)
         } else if (customers.length === 0) {
            const newCustomers = [
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
                  id: 4,
                  firstname: 'Steve',
                  lastname: 'Jobs',
                  phone: '3148054258',
                  email: 'steve@gmail.com',
                  status: true
               },
               {
                  id: 5,
                  firstname: 'Belinda',
                  lastname: 'Gates',
                  phone: '3557845020',
                  email: 'belinda@gmail.com',
                  status: true
               },
               {
                  id: 6,
                  firstname: 'Mark',
                  lastname: 'Zuckerberg',
                  phone: '3148054258',
                  email: 'mark@gmail.com',
                  status: true
               },
               {
                  id: 7,
                  firstname: 'Satia',
                  lastname: 'Nadella',
                  phone: '3402544789',
                  email: 'satia@gmail.com',
                  status: true
               },
               {
                  id: 8,
                  firstname: 'Linus',
                  lastname: 'Tolvars',
                  phone: '3178545201',
                  email: 'linus@gmail.com',
                  status: true
               },
               {
                  id: 9,
                  firstname: 'Larry',
                  lastname: 'Page',
                  phone: '3201254878',
                  email: 'larry@gmail.com',
                  status: true
               },
               {
                  id: 10,
                  firstname: 'Sergei',
                  lastname: 'Brin',
                  phone: '3109874563',
                  email: 'sergei@gmail.com',
                  status: true
               }
            ]
            CustomerModel.insertMany(newCustomers).then((customersSaved) => {
               customersSaved.sort((a, b) => {
                  return a.id - b.id
               })
               return res.status(200).send(customersSaved)
            })
            .catch((error) => {
               return next(error)
            })
         } else {
            customers .sort((a, b) => {
               return a.id - b.id
            })
            return res.status(200).send(customers)
         }
      })
   }
}
