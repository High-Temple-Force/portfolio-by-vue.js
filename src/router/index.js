import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/Home'
import about from '@/components/About'
import languages from '@/components/Languages'
import frameworks from '@/components/Frameworks'
import works from '@/components/Works'
import contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/languages',
      component: languages
    },
    {
      path: '/Frameworks',
      component: frameworks
    },
    {
      path: '/works',
      component: works
    },
    {
      path: '/contact',
      component: contact
    }

  ]
})
