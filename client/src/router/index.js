import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/post',
      name: 'post',
      component: () => import('@/pages/post')
    },
    {
      path: '/',
      name: 'main',
      component: () => import('@/pages/main')
    },
    {
      path: '/:name',
      name: 'main',
      component: () => import('@/pages/main')
    },
  ]
})
