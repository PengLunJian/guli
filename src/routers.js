import Vue from 'vue'
import Router from 'vue-router'
import HomeApp from './module/home/App'
import HouseApp from './module/house/App'
import DetailApp from './module/detail/App'

Vue.use(Router)

export default new Router({
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
