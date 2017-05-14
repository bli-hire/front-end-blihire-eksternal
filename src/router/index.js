import Vue from 'vue'
import Router from 'vue-router'

import Beranda from '@/components/Beranda'

import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Beranda',
      component: Beranda
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
