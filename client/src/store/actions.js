import Vuex from 'vuex'
import Vue from 'vue'
import cards from './cards'
import boards from './boards'
import user from './user'

export function startup( {dispatch}, board_id ) {
  const dispatch_local = dispatch
  return new Promise((resolve, reject) => {
    const users = dispatch_local('fetch_user')
    const cards = dispatch_local('fetch_all_cards')
    const boards = dispatch_local('fetch_all_boards', board_id)
    Promise.all([cards, boards, users]).then(_ => {
      resolve()
    }).catch(_ => {
      reject()
    })
  })
}

//todo hook on navigate to set selected_board_id
