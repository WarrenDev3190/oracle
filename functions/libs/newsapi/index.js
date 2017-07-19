// functions/libs/newsapi/index.js
// Handler for hosted Firebase Function
// This module interacts with the https://newsapi.org/ API
// It gathers the latest stories from English-Language Sources
const Promise = require('bluebird')
const getArticles = require('./libs/getArticles')
const prepArticlesForApp = require('./libs/prepArticlesForApp')
const cors = require('cors')({ origin: true })
/**
 * [handleGetNewsAPI]
 * @param  {Object} request  [Express Request Object with firebase 'niceties' 😜]
 * @param  {Object} response [Express Response Object]
 * @return {Promise}         [firebase requires that functions return a Promise]
 */
module.exports = function handleGetNewsAPI(request, response) {
  cors(request, response, function corsHandler() {
    return new Promise(function getNewsApiPromiseHandler(resolve, reject) {
      getArticles(request.query.company)
      .then(function handleAllArticles(allArticles) {
        let articlesRes = allArticles.map(prepArticlesForApp)
        response.send(articlesRes)
      })
      .catch(function handleAllArticlesError(allArticlesErr) {
        response.send(allArticlesErr)
      })
    })
  })

}
