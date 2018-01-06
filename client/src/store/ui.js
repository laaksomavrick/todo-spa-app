const state = {
  board_edit_open: false,
  card_edit_open: false,
  board_create_open: false,
}

const actions = {
  toggle_board_create({ commit }) {
    commit('toggle_board_create_open')
  }
}

const mutations = {
  toggle_board_create_open (state) {
    state.board_create_open = !state.board_create_open
  }
}

const getters = {
  get_board_create_open: (state) => {
    return state.board_create_open
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
