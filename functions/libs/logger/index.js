// oracle/functions/libs/logger/index.js
// a util to add a ts to logging statements
const moment = require('moment')

const logger = {
  trace: msg => {
    return console.log('[' + moment().format() + ']: ' + msg)
  }
}

module.exports = logger
