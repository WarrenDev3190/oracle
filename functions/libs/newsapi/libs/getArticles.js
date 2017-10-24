// oracle/functions/libs/newsapi/libs/getArticles.js
const Promise = require('bluebird')
const R = require('ramda')
const getSources = require('./getSources')
const getCherryArticles = require('./getCherryArticles')
const getArticlesBySource = require('./getArticlesBySource')
const logger = require('../../logger')

module.exports = function getArticles(company) {
  return getSources()
  .then(function getSourcesHandler(sources) {
    return Promise.all([getCherryArticles(company),Promise.map(sources, getArticlesBySource)])
  })
  .then(function handleAllArticles(allArticles) {
    //allArticles -> first_element -> cherry
    //            -> second_element -> other -> array -> different company
    let cherry_articles = R.flatten(allArticles[0]);
    let other_articles = R.flatten(allArticles[1]);
    //sort different articles individually
    cherry_articles.sort((a,b)=>{
      return new Date(b.publishedAt) - new Date(a.publishedAt);
    });
    other_articles.sort((a,b)=>{
      return new Date(b.publishedAt) - new Date(a.publishedAt);
    });
    //flatten sorted articles again
    return R.flatten([cherry_articles,other_articles]);
  })
  .catch(function handleError(getArticlesErr) {
    logger.trace('Error retreiving articles: ' + getArticlesErr)
    return getArticlesErr
  })
}
