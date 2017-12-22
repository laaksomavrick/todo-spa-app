import Vuex from 'vuex'
import Vue from 'vue'
import cards from './cards'
import boards from './boards'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cards,
    boards,
    user
  }
})
