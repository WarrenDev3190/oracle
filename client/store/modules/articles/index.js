import { reduceByKey, apFormat } from '../../../utils'

const state = {
  articles: []
}

const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES'
const TOGGLE_ARTICLE_SELECT = 'TOGGLE_ARTICLE_SELECT'

const getters = {
  allArticles: (state) => state.articles,
  selectedArticles: (state) => {
    return state.articles.filter(a => a.selected)
  },
  articlesSourceGrouped: (state, getters) => {
    return {
      'all': getters.allArticles,
      ...reduceByKey('source')(getters.allArticles)
    }
  },
  articlesFilterDateGrouped: (state, getters) => {
    return {
      'all': getters.allArticles,
      ...reduceByKey('filterDate')(getters.allArticles)
    }
  }
}

const mutations = {
  [RECEIVE_ARTICLES]: (state, articles) => {
    state.articles = articles.data
    // Add a filter date, which is to say a date without a time, for grouping articles easily later
    for (var i = 0, l = state.articles.length; i < l; i++) {
      var article = state.articles[i]
      // Format article titles
      article['title'] = apFormat(article['title'])
      if (article.publishedAt == null) {
        article['filterDate'] = 'No Date Given'
      } else {
        var prefixD = article.publishedAt.substring(0, article.publishedAt.indexOf('T'))
        if (prefixD.trim() === '') {
          article['filterDate'] = 'No Date Given'
        } else {
          article['filterDate'] = prefixD + 'T00:00:00Z'
        }
      }
    }
  },
  [TOGGLE_ARTICLE_SELECT]: (state, index) => {
    state.articles[index].selected = !state.articles[index].selected
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
