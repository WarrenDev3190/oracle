// oracle/functions/libs/newsapi/libs/getArticlesBySource.js
const R = require('ramda')
const axios = require('./axios')
const logger = require('../../logger')

module.exports = function getArticlesBySource(sourceId) {
    return axios.get('/articles?source=' + sourceId)
           .then(function handleGetArticlesBySourceRes(getArticlesBySourceRes) {
             let articles = getArticlesBySourceRes.data.articles
             let articlesWithSource = R.map(R.assoc('source', sourceId), articles)
             return articlesWithSource
           })
           .catch(function handleGetArticlesBySourceErr(getArticlesBySourceErr) {
             logger.trace('Error retreiving article from source: ' + sourceId + ' : ' + getArticlesBySourceErr)
             return getArticlesBySourceErr
           })
}
