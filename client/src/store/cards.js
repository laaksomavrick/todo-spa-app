const state = {
  cards: []
}

const actions = {
  fetchAllCards({ commit }) {
    var cards = [
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 5}
    ]
    commit('receive_cards', cards)
  }
}

const mutations = {
  receive_cards (state, cards) {
    state.cards = cards
  }
}

const getters = {
  getAllCards (state) {
    return state.cards
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
