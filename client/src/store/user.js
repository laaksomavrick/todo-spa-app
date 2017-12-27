import { current, login, create } from '@/api/user' 

const state = {
  user: {},
  jwt: '',
  authenticated: false
}

const actions = {

  fetch_user_token({ commit }, payload) {
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
  },

  check_user_token({ commit }) {
    const jwt = localStorage.getItem("JWT")
    if (jwt) {
      commit('receive_jwt', jwt)
    }
  }

}

const mutations = {

  receive_jwt (state, jwt) {
    state.jwt = jwt
    state.authenticated = true
    localStorage.setItem("JWT", jwt)
  },

  error_jwt (state) {
    state.jwt = null
    state.authenticated = false
  }

}

const getters = {

  get_authenticated: (state) => {
    return state.authenticated
  },

  get_jwt: (state) => {
    return state.jwt
  }

}

export default {
  state,
  actions,
  mutations,
  getters
}
