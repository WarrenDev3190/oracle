// oracle/functions/libs/newsapi/libs/getSources.js
// This function allows for retrieving all English-language
// sources from the NewsAPI
const axios = require('./axios')
const logger = require('../../logger')

module.exports = function getSources() {
  return axios.get('/sources?language=en')
          .then(function handleGetSourcesRes(getSourcesRes) {
            return getSourcesRes.data.sources
          })
          .catch(function handleGetSourcesErr(getSourcesErr) {
            /* eslint-disable */
            logger.trace('Error Retrieving Sources from NewsAPI:' + getSourcesErr)
            /* eslint-enable */
            return getSourcesErr
          })
}
