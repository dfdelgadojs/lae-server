// IMPORT LIBRARIES
const jwt = require('jsonwebtoken')

// EXPORT CONTROLLERS
module.exports = {
  ValidateToken: (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
      jwt.verify(token, 'LAEServer', function(error, decoded) {
         if (error) {
            return res.status(401).end()
         } else {
            req.user = decoded.user
            return next()
         }
    })
  },
  ErrorHandler: (error, req, res, next) => {
    return res.status(500).send(error)
  }
}
