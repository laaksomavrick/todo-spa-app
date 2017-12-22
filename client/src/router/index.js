import Vue from 'vue'
import Router from 'vue-router'
import CardView from '@/components/CardView'
import Login from '@/components/Login'
import store from '@/store/index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      component: CardView,
      meta: { auth: true }
    },
    {
      path: '*', redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some((route) => route.meta.auth)
  const authed = store.state.user.authenticated
  authRequired && !authed ? next('/login') : next()
})


export default router
