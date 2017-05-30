// oracle/functions/libs/newsapi/libs/getSources.js
// This function allows for retrieving all English-language
// sources from the NewsAPI
const Promise = require('bluebird')

module.exports = function getSources() {
  const whiteListedSites = [
    'recode',
    'techcrunch',
    'the-verge',
    'the-wall-street-journal'
  ]
  return new Promise(function (resolve, reject)  {
      return resolve(whiteListedSites)
  })
}
