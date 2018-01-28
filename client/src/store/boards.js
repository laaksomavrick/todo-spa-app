import { index, create, update } from '@/api/boards'

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
  },

  create_board({commit}, payload) {
    return new Promise((resolve, reject) => {
      create(payload)
        .then(res => res.body.data)
        .then(board => {
          commit('receive_board', board)
          commit('set_selected_board', board)
          resolve()
        })
        .catch(err => {
          reject()
        })
      })
  },

  update_board({commit}, payload) {
    //todo update model optimistically
    return new Promise((resolve, reject) => {
      update(payload)
        .then(res => res.body.data)
        .then(board => {
          commit('update_board', board)
          resolve()
        })
        .catch(err => {
          reject()
        })
    })
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
  },

  receive_board (state, board) {
    state.boards.push(board)
  },

  update_board (state, board) {
    state.boards = state.boards.map ( b => { return b.id === board.id ? board : b })
  }
}

const getters = {

  get_all_boards (state) {
    return state.boards.sort((a, b) => { return a.id > b.id })
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
