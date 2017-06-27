// oracle/functions/libs/newsapi/libs/getArticles.js
const Promise = require('bluebird')
const R = require('ramda')
const getSources = require('./getSources')
const getCherryArticles = require('./getCherryArticles')
const getArticlesBySource = require('./getArticlesBySource')
const logger = require('../../logger')

module.exports = function getArticles() {
  return getSources()
  .then(function getSourcesHandler(sources) {
      return Promise.all([Promise.map(sources, getArticlesBySource),getCherryArticles("Time Inc")])
  })
  .then(function handleAllArticles(allArticles) {
      return R.flatten(allArticles)
  })
  .catch(function handleError(getArticlesErr) {
    logger.trace('Error retreiving articles: ' + getArticlesErr)
    return getArticlesErr
  })
}
