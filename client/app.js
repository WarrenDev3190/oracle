import Vue from 'vue'
import VueMaterial from 'vue-material'
import VueAnalytics from 'vue-analytics'
import VueIntercom from 'vue-intercom'
import VeeValidate from 'vee-validate'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import firebaseService from './services/firebase'
import './styles/main.scss'

Vue.use(VueMaterial)
Vue.use(VeeValidate)


Vue.use(VueAnalytics, {
  id: 'UA-98058995-1',
  router
})
Vue.use(VueIntercom, {
  appId: 'xy4g63ou'
})



sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

firebaseService.listenForAuthStateChanged()

export { app, router, store }
