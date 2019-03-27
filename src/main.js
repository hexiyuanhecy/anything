// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastClick'
import VueMaterial from 'vue-material'

import 'styles/reset.css'
import 'styles/boder.css'
import 'vue-material/dist/vue-material.css'
import 'vue-material/dist/theme/default.css'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import Vuetify from 'vuetify'

Vue.config.productionTip = false
fastClick.attach(document.body)// 移动端三百毫秒点击事件
Vue.use(VueMaterial)
Vue.use(Vuetify)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
