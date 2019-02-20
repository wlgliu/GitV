import Vue from 'vue'
import Router from 'vue-router'
const _import_ = file => () => import('@/pages/' + file + '.vue');

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'app',
      component: _import_('app/index')
    },
    {
      path: '/data/:user',
      name: 'data',
      component: _import_('data/index')
    }
  ]
})
