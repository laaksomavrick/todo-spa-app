import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './store/index'
import { sync } from 'vuex-router-sync'

sync(store, router)

Vue.config.productionTip = false
Vue.use(VueResource)

store.dispatch('checkUserToken')

Vue.http.interceptors.push((req, next) => {
  req.headers.set('Authorization', `Bearer ${store.getters.getJWT}`)
  req.headers.set('Accept', 'application/json')
  next()
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

