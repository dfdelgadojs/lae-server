// IMPORT DATA MODELS
const TaskModel = require('../models/task')

// EXPORT CONTROLLERS
module.exports = {
   FetchTasks: (req, res, next) => {
      const query = TaskModel.find({})
      query.exec((error, tasks) => {
         if (error) {
            return next(error)
         } else {
            return res.status(200).send(tasks)
         }
      })
   },
   CreateTask: (req, res, next) => {
      const NewTask = new TaskModel({
         ...req.body
      })
      NewTask.save((error) => {
         if (error) {
            return next(error)
         } else {
            return res.status(200).end()
         }
      })
   },
   EditTask: (req, res, next) => {
      TaskModel.updateOne({ _id: req.body.id }, {
         $set: {
            title: req.body.title
         }
      }).then(() => {
         return res.status(200).end()
      })
      .catch((error) => {
         return next(error)
      })
   },
   DeleteTask: (req, res, next) => {
      TaskModel.deleteOne({ _id: req.query.id }).then(() => {
         return res.status(200).end()
      }).catch((error) => {
         return next(error)
      })
   }
}