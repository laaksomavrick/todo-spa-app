import Vuex from 'vuex'
import Vue from 'vue'
import cards from './cards'
import boards from './boards'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cards,
    boards
  }
})
