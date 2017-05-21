import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import beforeEach from './libs/beforeEach'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Login
    }
  ]
})

// mount beforeEach method
router.beforeEach = beforeEach

export default router
