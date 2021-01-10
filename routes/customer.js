// CONTROLLERS
const CustomerController = require('../controllers/customer')
const CommonController = require('../controllers/common')

// CATEGORIES ROUTE
module.exports = function(app) {
  app.get(
    '/api/customers/fetch-all',
    CustomerController.FetchCustomers,
    CommonController.ErrorHandler
  )
}
