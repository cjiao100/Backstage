/*
 * @Author: cjiao100
 * @Date: 2019-10-11 09:40:42
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-10-11 18:34:28
 * @Description: Do not edit
 */
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './http'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
