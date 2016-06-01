module.exports = createServer

// requires
var Sequelize  = require('sequelize')
var express    = require('express')
var bodyParser = require('body-parser')
var https      = require('https')
var fs         = require('fs')

var wc_db       = require('wc_db')


/**
* server function
* @param  {Object} config [description]
*/
function createServer(argv, createApp) {
  // vars
  var sequelize
  createApp = createApp || require('./create-app')

  var config = require('../config/config')

  var defaultCurrency = 'https://w3id.org/cc#bit'
  var defaultDatabase = 'webcredits'
  var defaultWallet   = 'https://localhost/wallet/test#this'

  config.currency = argv.currency || config.currency || defaultCurrency
  config.database = argv.database || config.database || defaultDatabase
  config.wallet   = argv.wallet   || config.wallet   || defaultWallet
  config.key      = argv.key      || null
  config.cert     = argv.cert     || null

  var port = argv.port

  // run main

  var app = express()
  wcApp = createApp(null)
  app.use('/', wcApp)

  var defaultPort = 11077
  port = port || defaultPort

  console.log(config)

  var key
  try {
    key = fs.readFileSync(config.key)
  } catch (e) {
    throw new Error('Can\'t find SSL key in ' + config.key)
  }

  var cert
  try {
    cert = fs.readFileSync(config.cert)
  } catch (e) {
    throw new Error('Can\'t find SSL cert in ' + config.cert)
  }

  var credentials = {
    key: key,
    cert: cert,
    requestCert: true
  }

  server = https.createServer(credentials, app)

  return server

}
