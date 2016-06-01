module.exports = WcMiddleware

var express = require('express')
var authentication = require('wc_authentication').authentication;

function WcMiddleware (corsSettings) {
  var router = express.Router('/')


  router.use('/', authentication)
  //router.get('/', home)

  // Errors
  //router.use(errorPages)

  // TODO: in the process of being deprecated
  // Convert json-ld and nquads to turtle
  // router.use('/*', parse.parseHandler)

  return router
}
