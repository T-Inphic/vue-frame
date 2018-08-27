// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import http from './api'
import url from './api/requestUrl'
import 'babel-polyfill'
import '../static/css/reset.css'

Vue.config.productionTip = false
Vue.prototype.$url = url
Vue.prototype.$http = http
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
