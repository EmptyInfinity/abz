import Vue from 'vue'
import Router from 'vue-router'

import Landing from './views/Landing'
import Profile from './views/Profile'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/user/:id',
      name: 'user',
      component: Profile
    }
  ]
})
