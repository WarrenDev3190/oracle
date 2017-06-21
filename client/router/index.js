import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Login from '../components/Login.vue'
import Topics from '../components/Topics.vue'
import Keywords from '../components/Keywords.vue'
import Stories from '../components/Stories.vue'
import Layout from '../components/Layout.vue'
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
      name: 'not-found',
      path: '*',
      component: NotFound,
      meta: {
        order: undefined
      }
    }
  ]
})

// mount beforeEach method
router.beforeEach((to, from, next) => {
  if (to.path !== '/' && !store.state.user.user) {
    return next({ path: '/' })
  }
  else if (to.path == '/next'){
    var found = router.options.routes.filter(function(route){
      return route.meta.order == from.meta.order + 1
    })
    if(found.length > 0){
      return next({path: found[0].path})
    }
    else{
      return next(false)
    }
  }
  else if (to.path == '/previous'){
    var found = router.options.routes.filter(function(route){
      return route.meta.order == from.meta.order - 1
    })
    if(found.length > 0){
      return next({path: found[0].path})
    }
    else{
      return next(false)
    }
  }
  else{
    return next()
  }
})

export default router
