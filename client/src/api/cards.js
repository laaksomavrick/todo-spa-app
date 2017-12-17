import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export const index = () => {
    return Vue.http.get('/api/cards')
}

