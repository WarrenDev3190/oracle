import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import articles from './modules/articles'
import { syncUserState } from './plugins'

Vue.use(Vuex)
console.log(syncUserState)

const store = new Vuex.Store({
  modules: {
    user,
    articles
  },
  plugins: [syncUserState]
})

export default store
