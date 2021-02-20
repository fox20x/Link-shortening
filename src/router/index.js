import { check } from 'express-validator'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    meta: { layout: 'empty', auth: false },
    component: () => import('../views/Auth')
  },
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main', auth: true },
    component: Home
  },
  {
    path: '/create',
    name: 'Create',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Create')
  },
  {
    path: '/links',
    name: 'Links',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Links')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Detail')
  },
  {
    path: '*',
    name: 'NotFound',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/NotFound')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    async function checkId() {
      let userData = localStorage.getItem('SmallLinkUserData') || ''

      let response = await fetch('http://localhost:3000/api/userIdCheked', {
        method: 'POST',
        body: userData,
        headers: {'Content-Type': 'application/json'}
      })
      let data = await response.json()

      const currentUser = data.checkStatus
      const requireAuth = to.matched.some(record => record.meta.auth) //проверка каждого роута нужна ли ему регистрация
      
      if (requireAuth && !currentUser) {
        next('/auth')
      } else {
        next()
      }
    }

    checkId()
})

export default router
