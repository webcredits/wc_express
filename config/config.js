#!/usr/bin/env node

/**
 * The config object.
 * @type {Object}
 * @property  {Object} config             The config object.
 * @property  {Object} config.db          The db config object.
 * @property  {string} config.db.dialect  The db dialect sqlite | mysql.
 * @property  {string} config.db.host     The db host.
 * @property  {string} config.db.database The db database name.
 * @property  {string} config.db.username The db username.
 * @property  {string} config.db.password The db password.
 */
var config = {
  db : {
    dialect  : 'mysql',
    host     : 'localhost',
    database : 'media',
    username : 'me',
    password : ''
  }
}

module.exports = config
