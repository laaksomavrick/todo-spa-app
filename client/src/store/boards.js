import { index } from '@/api/boards'

const state = {
  boards: [],
  selected: null
}

const actions = {
  fetch_all_boards({ commit }, board_id) {
    index()
      .then(res => res.body.boards)
      .then(boards => { 
        commit('receive_boards', boards)
        if (board_id) {
          const board = boards.find(b => b.id === board_id)
          commit('set_selected_board', board)
        }
      })
  },

  select_board({ commit }, board) {
    commit('set_selected_board', board)
  }
}

const mutations = {
  receive_boards (state, boards) {
    state.boards = boards
  },
  set_selected_board (state, board) {
    if (board && board.id) {
      state.selected = board.id
    } else {
      state.selected = null
    }
  }
}

const getters = {

  get_all_boards (state) {
    return state.boards
  },

  get_selected_board (state) {
    return state.selected
  },

  get_board_details: (state) => (board_id) => {
    return state.boards.find(b => b.id === board_id)
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
