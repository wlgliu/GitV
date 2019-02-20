// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入组件
import Vcomp from './components/index'
Vue.use(Vcomp)

// 引入粒子动效
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

// 引入bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// 引入字体图标
import './assets/iconfont/iconfont.css' 

// 引入v-charts
import VCharts from 'v-charts'
Vue.use(VCharts)

// 引入axios
import Axios from 'axios'
Vue.prototype.$axios = Axios




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
