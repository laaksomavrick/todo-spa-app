import { current, login, create } from '@/api/user' 

const state = {
  user: {},
  jwt: null,
  authenticated: false
}

const actions = {

  fetchUserToken({ commit }, payload) {
    return new Promise((resolve, reject) => {
      login(payload)
        .then(res => res.body.jwt)
        .then(jwt => { 
          commit('receive_jwt', jwt)
          resolve()
        })
        .catch(err => {
          commit('error_jwt')
          reject()
        })
    })
  }

}

const mutations = {

  receive_jwt (state, jwt) {
    state.jwt = jwt
    //todo save in localstorage
    state.authenticated = true
  },

  error_jwt (state) {
    state.jwt = null
    state.authenticated = false
  }

}

const getters = {

  getAuthenticated: (state) => {
    return state.authenticated
  }

}

export default {
  state,
  actions,
  mutations,
  getters
}
