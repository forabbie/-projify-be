import { createRouter, createWebHistory } from 'vue-router'
import storageService from '@/utils/storage'
import NotFoundView from '../views/pages/404View.vue'
import AuthView from '../views/AuthView.vue'
import DashboardView from '../views/DashboardView.vue'

const Signin = () => import(/* webpackChunkName: "SigninChunk" */ '@/components/modules/SignIn.vue')
const Signup = () => import(/* webpackChunkName: "SignupChunk" */ '@/components/modules/SignUp.vue')

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardView,
    meta: {
      requiresAuth: true
    }
  },
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
    name: '404',
    component: NotFoundView
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500'
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = storageService.getLocalStorage('auth')
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Sign-In' })
  } else if (!to.meta.requiresAuth && isAuthenticated) {
    next({ name: 'Dashboard' })
  } else {
    next()
  }
})
export default router
