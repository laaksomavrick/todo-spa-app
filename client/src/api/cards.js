import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export const index = () => {
    return Vue.http.get('/api/cards')
}

export const create = (payload) => {
    return Vue.http.post('/api/cards', payload)
}

