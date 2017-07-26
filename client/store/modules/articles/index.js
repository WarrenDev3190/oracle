import Vue from 'vue'
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
      article.title = apFormat(article.title)
      if (article.publishedAt == null) {
        Vue.set(article, 'filterDate', 'No Date Given')
      } else {
        var prefixD = article.publishedAt.substring(0, article.publishedAt.indexOf('T'))
        if (prefixD.trim() === '') {
          Vue.set(article, 'filterDate', 'No Date Given')
        } else {
          Vue.set(article, 'filterDate', prefixD + 'T00:00:00Z')
        }
      }
      // Set alts to be used for editing in this case
      // article.titleAlt = article.title
      Vue.set(article, 'titleAlt', article.title)
      Vue.set(article, 'urlAlt', article.url)
      Vue.set(article, 'descriptionAlt', article.description)
    }
    state.articles
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
