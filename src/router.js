import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Price from '@/views/Price.vue' ;
import Stock from '@/views/Stock.vue' ;
import Quote from '@/views/Quote.vue' ;
import Misc from '@/views/Misc.vue' ;
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
  {path: '/Price',name:'price',component: Price},
  {path: '/Stock',name:'stock',component: Stock},
  {path: '/Quote',name:'quote',component: Quote},
  {path: '/Misc',name:'misc',component: Misc},
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
