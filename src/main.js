import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import router from './routers/mainRouter.js'
import './common/scss/index.scss'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
