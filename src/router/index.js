import Vue from 'vue'
import Router from 'vue-router'
import rank from '@/components/rank'
import ranklist from '@/components/ranklist'
import show from '@/components/show'
import onshow from '@/components/onshow'
import toshow from '@/components/toshow'
import search from '@/components/search'
import user from '@/components/user'
import detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/show'
    },
    {
      path: '/show',
      component: show,
      redirect: '/show/onshow',
      children: [
        {
          path: 'onshow',
          component: onshow
        },
        {
          path: 'toshow',
          component: toshow
        }
      ]
    },
    {
      path: '/rank',
      component: rank,
      children: [
        {
          path: 'ranklist',
          component: ranklist
        }
      ]
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/user',
      component: user
    },
    {
      path: '/detail',
      component: detail
    }
  ]
})
