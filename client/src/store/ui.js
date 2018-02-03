const state = {
  board_edit_open: false,
  card_edit_open: false,
  board_create_open: false,
  loading: true,
}

const actions = {
  toggle_board_create({ commit }) {
    commit('toggle_board_create_open')
  },
  open_card_details({ commit }) {
    commit('open_card_details')
  },
  close_card_details({ commit }) {
    commit('close_card_details')
  },
  set_loading({ commit }, value) {
    commit('set_loading', value)
  }
}

const mutations = {
  toggle_board_create_open (state) {
    state.board_create_open = !state.board_create_open
  },
  open_card_details (state) {
    state.card_edit_open = true
  },
  close_card_details (state) {
    state.card_edit_open = false
  },
  set_loading (state, value) {
    state.loading = value
  }
}

const getters = {
  get_board_create_open: (state) => {
    return state.board_create_open
  },
  get_card_edit_open: (state) => {
    return state.card_edit_open
  },
  get_loading: (state) => {
    return state.loading
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
