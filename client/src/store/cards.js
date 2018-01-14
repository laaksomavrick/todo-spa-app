import { index, create } from '@/api/cards' 

const state = {
  cards: [],
  editing: false,
  selected: null
}

const actions = {

  fetch_all_cards({ commit }) {
    index()
      .then(res => res.body.cards)
      .then(cards => commit('receive_cards', cards))
  },

  toggle_editing({ commit }) {
    commit('toggle_editing')
  },

  create_card({commit}, payload) {
    //todo update card optimistically 
    return new Promise((resolve, reject) => {
      create(payload)
        .then(res => res.body.data)
        .then(card => {
          commit('receive_card', card)
          commit('toggle_editing')
          resolve()
        })
        .catch(err => {
          commit('error_card')
          reject()
        })
    })
  },

  select_card({commit}, card) {
    commit('select_card', card)
  },

  unselect_card({commit}) {
    commit('unselect_card')
  }

}

const mutations = {

  receive_cards (state, cards) {
    state.cards = cards
  },

  receive_card (state, card) {
    state.cards.push(card)
  },

  error_card (state) {
    //???
  },

  toggle_editing (state) {
    state.editing = !state.editing
  },

  select_card (state, card) {
    state.selected = card
  },

  unselect_card (state) {
    state.selected = null
  }

}

const getters = {

  get_all_cards: (state) => {
    return state.cards.sort((a, b) => { return a.id < b.id })
  },

  get_cards_for_board: (state) => (board_id) => {
    return state.cards
      .filter(card => card.board_id === board_id)
      .sort((a, b) => { return b.id - a.id })
  },

  //todo move to ui.js
  get_editing: (state) => {
    return state.editing
  },

  get_selected_card: (state) => {
    return state.selected
  }

}

export default {
  state,
  actions,
  mutations,
  getters
}
