#!/usr/bin/env node

// requires
var fs         = require('fs')
var program    = require('commander')
var wc_db      = require('wc_db')
var qpm_media  = require('../')
var solidbot   = require('solidbot');

/**
 * version as a command
 */
function bin(argv) {
  // setup config
  var config = require('../config/config.js')

  program
  .option('-d, --database <database>', 'Database')
  .parse(argv)

  var defaultDatabase = 'media'

  config.database = program.database || config.database || defaultDatabase
  var url = process.argv[2] || 'https://www.reddit.com/r/perfectloops/top/?sort=top&t=all&count=25&after=t3_4j0v4f'

  qpm_media.getRandomImage(function(err, ret){
    if (err) {
      console.error(err)
    } else {
      console.log(ret[0][0].uri);
    }
  })


}

// If one import this file, this is a module, otherwise a library
if (require.main === module) {
  bin(process.argv)
}

module.exports = bin
