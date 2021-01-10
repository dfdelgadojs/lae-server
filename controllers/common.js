// EXPORT CONTROLLERS
module.exports = {
  ErrorHandler: (error, req, res, next) => {
    return res.status(500).send(error)
  }
}
