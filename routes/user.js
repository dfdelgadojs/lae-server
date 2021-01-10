// CONTROLLERS
const UserController = require('../controllers/user')
const CommonController = require('../controllers/common')

// CATEGORIES ROUTE
module.exports = function(app) {
  app.post(
    '/api/user/signup',
    UserController.CreateUser,
    CommonController.ErrorHandler
  )

  app.post(
    '/api/user/login',
    UserController.LoginUser,
    CommonController.ErrorHandler
  )
}
