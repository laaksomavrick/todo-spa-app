import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export const current = () => {
    return Vue.http.get('/api/users/current')
}

export const login = (payload) => {
    return Vue.http.post('/api/user_token', payload)
}

export const create = (payload) => {
    return Vue.http.post('/api/user_token', payload)
}

