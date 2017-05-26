import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import articles from './modules/articles'
import layouts from './modules/layouts'
import { syncUserState } from './plugins'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    articles,
    layouts
  },
  plugins: [syncUserState]
})

export default store
