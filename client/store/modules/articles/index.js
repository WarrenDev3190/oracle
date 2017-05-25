import { reduceByKey } from '../../../utils'

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
  articlesGrouped: (state, getters) => {
    return { 'all': getters.allArticles,
      ...reduceByKey('source')(getters.allArticles) }
  }
}

const mutations = {
  [RECEIVE_ARTICLES]: (state, articles) => {
    state.articles = articles.data
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
