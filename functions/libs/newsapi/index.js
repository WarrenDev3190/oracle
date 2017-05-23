// functions/libs/newsapi/index.js
// Handler for hosted Firebase Function
// This module interacts with the https://newsapi.org/ API
// It gathers the latest stories from English-Language Sources
const Promise = require('bluebird')
const getArticles = require('./libs/getArticles')
/**
 * [handleGetNewsAPI description]
 * @param  {Object} request  [Express Request Object with firebase 'niceties' 😜]
 * @param  {Object} response [Express Response Object]
 * @return {Promise}         [firebase requires that functions return a Promise]
 */
module.exports = function handleGetNewsAPI(request, response) {
  return new Promise(function getNewsApiPromiseHandler(resolve, reject) {
    getArticles()
    .then(function handleAllArticles(allArticles) {
      response.status(200).json({
        status: 200,
        data: allArticles,
        message: 'ok'
      })
    })
    .catch(function handleAllArticlesError(allArticlesErr) {
      response.status(500).json({
        status: 500,
        error: allArticlesErr,
        message: 'error retreiving articles'
      })
    })
  })
}
