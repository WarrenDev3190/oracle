import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Login from '../components/Login.vue'
import Topics from '../components/Topics.vue'
import Keywords from '../components/Keywords.vue'
import Stories from '../components/Stories.vue'
import Layout from '../components/Layout.vue'
import Design from '../components/Design.vue'
import Share from '../components/Share.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      name: 'login',
      path: '/',
      component: Login,
      meta: {
        order: undefined
      }
    },
    {
      name: 'topics',
      path: '/topics',
      component: Topics,
      meta: {
        order: 0
      }
    },
    {
      name: 'keywords',
      path: '/keywords',
      component: Keywords,
      meta: {
        order: 1
      }
    },
    {
      name: 'stories',
      path: '/stories',
      component: Stories,
      meta: {
        order: 2
      }
    },
    {
      name: 'layout',
      path: '/layout',
      component: Layout,
      meta: {
        order: 3
      }
    },
    {
      name: 'design',
      path: '/design',
      component: Design,
      meta: {
        order: 4
      }
    },
    {
      name: 'share',
      path: '/share',
      component: Share,
      meta: {
        order: 5
      }
    },
    {
      name: 'not-found',
      path: '*',
      component: NotFound
    }
  ]
})

// mount beforeEach method
router.beforeEach((to, from, next) => {
  if (to.path !== '/') {
    return store.state.user.user ? next() : next({ path: '/' })
  }
  next()
})

export default router
