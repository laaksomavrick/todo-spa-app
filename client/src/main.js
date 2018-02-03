import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './store/index'
import { sync } from 'vuex-router-sync'
import underscore from 'vue-underscore'
import VueParticles from 'vue-particles'
import "vue-material-design-icons/styles.css" 

sync(store, router)

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(underscore)
Vue.use(VueParticles)

store.dispatch('check_user_token')

Vue.http.interceptors.push((req, next) => {
  req.headers.set('Authorization', `Bearer ${store.getters.get_jwt}`)
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

