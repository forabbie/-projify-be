import { createRouter, createWebHistory } from 'vue-router'
// import storageService from '@/services/storage.service'
import AuthView from '../views/AuthView.vue'

const Signin = () => import(/* webpackChunkName: "SigninChunk" */ '@/components/modules/SignIn.vue')
const Signup = () => import(/* webpackChunkName: "SignupChunk" */ '@/components/modules/SignUp.vue')

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView,
  //   meta: {
  //     requiresAuth: true
  //   }
  // },
  {
    path: '/auth',
    redirect: { name: 'Sign-In' }
  },
  {
    path: '/auth',
    component: AuthView,
    children: [
      {
        path: 'signin',
        name: 'Sign-In',
        component: Signin
      },
      {
        path: 'signup',
        name: 'Sign-Up',
        component: Signup
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'Sign-In' }
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500'
})

router.beforeEach((to, from, next) => {
  /* const isAuthenticated = storageService.getLocalStorage('auth')
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'signin' })
  } else if (!to.meta.requiresAuth && isAuthenticated) {
    next({ name: 'home' })
  } else {
    next()
  } */
  next()
})
export default router
