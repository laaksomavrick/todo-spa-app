import Vue from 'vue'
import Router from 'vue-router'
import CardView from '@/components/CardView'
import Main from '@/components/Main'
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
      name: 'Main',
      component: Main,
      meta: { auth: true },
      children: [
        {
          path: '',
          component: CardView,
        },
        {
          path: 'board/:id',
          name: 'CardView',
          component: CardView,
        },
      ]
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

router.beforeEach((to, from, next) => {
  const isLogin = to.name == 'Login' 
  const authed = store.state.user.authenticated
  isLogin && authed ? next('/') : next()
})


export default router
