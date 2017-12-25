import { index } from '@/api/cards' 

const state = {
  cards: [],
  editing: false
}

const actions = {

  fetch_all_cards({ commit }) {
    index()
      .then(res => res.body.cards)
      .then(cards => commit('receive_cards', cards))
  },

  toggle_editing({ commit }) {
    commit('toggle_editing')
  }

}

const mutations = {

  receive_cards (state, cards) {
    state.cards = cards
  },

  toggle_editing (state) {
    state.editing = !state.editing
  }

}

const getters = {

  get_all_cards: (state) => {
    return state.cards
  },

  get_cards_for_board: (state) => (board_id) => {
    return state.cards.filter(card => card.board_id === board_id)
  },

  get_editing: (state) => {
    return state.editing
  }

}

export default {
  state,
  actions,
  mutations,
  getters
}
