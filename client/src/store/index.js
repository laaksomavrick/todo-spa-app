import Vuex from 'vuex'
import Vue from 'vue'
import cards from './cards'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cards
  }
})
