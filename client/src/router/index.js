import Vue from 'vue'
import Router from 'vue-router'
import CardView from '@/components/CardView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/board/:id',
      name: 'CardView',
      component: CardView
    }
  ]
})
