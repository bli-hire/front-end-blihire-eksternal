import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Jobs from '@/components/Jobs'
import Tracks from '@/components/Tracks'
import Resume from '@/components/Resume'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Jobs',
      name: 'Jobs',
      component: Jobs
    },
    {
      path: '/Tracks',
      name: 'Tracks',
      component: Tracks
    },
    {
      path: '/Resume',
      name: 'Resume',
      component: Resume
    }
  ]
})
