import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './store/index'
import { sync } from 'vuex-router-sync'

sync(store, router)

Vue.config.productionTip = false
Vue.use(VueResource)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

