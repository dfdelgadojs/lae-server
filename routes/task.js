// CONTROLLERS
const TaskController = require('../controllers/task')
const CommonController = require('../controllers/common')

// CATEGORIES ROUTE
module.exports = function(app) {
  app.get(
    '/api/task',
    TaskController.FetchTasks,
    CommonController.ErrorHandler
  )

  app.post(
    '/api/task',
    TaskController.CreateTask,
    CommonController.ErrorHandler
  )

  app.put(
    '/api/task',
    TaskController.EditTask,
    CommonController.ErrorHandler
  )

  app.delete(
    '/api/task',
    TaskController.DeleteTask,
    CommonController.ErrorHandler
  )
}
