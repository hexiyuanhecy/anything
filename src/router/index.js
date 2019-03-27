import Vue from 'vue'
import Router from 'vue-router'
import PageConfig from '@/views/PageConfig'
import Homeview from '@/views/Homeview'
import Hallview from '@/views/Hallview'
import Gonglue from '@/views/Gonglueview'
import Personal from '@/views/Personalview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      component: PageConfig,
      children: [
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'Homeview',
          component: Homeview
        },
        {
          path: 'hall',
          name: 'Hallview',
          component: Hallview
        },
        {
          path: 'gonglue',
          name: 'Gonglue',
          component: Gonglue
        },
        {
          path: 'personal',
          name: 'Personal',
          component: Personal
        }
      ]
    }
  ]
})
