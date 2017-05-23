// oracle/functions/libs/newsapi/newsapi.js
// A module do give an executable demonstration
// of the NewsApi integration.
// To run:
// First ensure dependencies are installed 'npm install'
// then you can either run(from the functions directory)
// 'node libs/newsapi/newsapi.js' or 'npm test:get-articles'
const chalk = require('chalk')
const logger = require('../logger')
const getArticles = require('./libs/getArticles')

logger.trace(chalk.bgCyan('Firing Up'))
getArticles()
.then(function handleGetArticles (articles) {
  logger.trace(chalk.bgGreen('Articles Received'))
  logger.trace(JSON.stringify(articles))
})
.catch(function handleGetArticlesErr(getArticlesErr) {
  logger.trace(chalk.bgRed('Error retrieving articles: ' + getArticlesErr))
})
