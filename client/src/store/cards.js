import { index } from '@/api/cards' 

const state = {
  cards: []
}

const actions = {
  fetchAllCards({ commit }) {
    index()
      .then(res => res.body.cards)
      .then(cards => commit('receive_cards', cards))
  }
}

const mutations = {
  receive_cards (state, cards) {
    state.cards = cards
  }
}

const getters = {

  getAllCards:(state) => {
    return state.cards
  },

  getCardsForBoard: (state) => (board_id) => {
    return state.cards.filter(card => card.board_id === board_id)
  }

}

export default {
  state,
  actions,
  mutations,
  getters
}
