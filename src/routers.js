import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import HomeApp from './module/home/App'
import HouseApp from './module/house/App'
import DetailApp from './module/detail/App'

Vue.use(VueRouter)
Vue.use(VueResource)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomeApp
    },
    {
      path: '/house',
      component: HouseApp
    },
    {
      path: '/detail',
      component: DetailApp
    }
  ]
})
