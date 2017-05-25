// oracle/functions/libs/newsapi/libs/prepArticlesForApp.js
const R = require('ramda')
/**
 * [prepArticlesForApp description]
 * @param  {[type]} article [description]
 * @param  {[type]} index   [description]
 * @return {[type]}         [description]
 */
module.exports = function prepArticlesForApp(article, index) {
  return R.merge(article, {
    index,
    selected: false
  })
}
