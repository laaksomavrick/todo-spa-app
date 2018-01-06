import Vuex from 'vuex'
import Vue from 'vue'
import cards from './cards'
import boards from './boards'
import user from './user'
import ui from './ui'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    cards,
    boards,
    user,
    ui
  }
})
