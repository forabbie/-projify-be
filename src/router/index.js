import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '@/utils/helper'
import NotFoundView from '../views/pages/404View.vue'
import AuthView from '../views/AuthView.vue'
import InvitationView from '../views/InvitationView.vue'
import DashboardView from '../views/DashboardView.vue'

const InviteSignUp = () =>
  import(
    /* webpackChunkName: "SigninChunk" */ '@/components/modules/pages/invitation/InvitationSignUp.vue'
  )
const InviteAccept = () =>
  import(
    /* webpackChunkName: "SigninChunk" */ '@/components/modules/pages/invitation/InvitationAccept.vue'
  )
const Signin = () =>
  import(/* webpackChunkName: "SigninChunk" */ '@/components/modules/TheSignIn.vue')
const Signup = () =>
  import(/* webpackChunkName: "SignupChunk" */ '@/components/modules/TheSignUp.vue')
const Dashboard = () =>
  import(/* webpackChunkName: "DashboardChunk" */ '@/components/modules/TheDashboard.vue')

const routes = [
  {
    path: '/',
    component: DashboardView,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard
      }
    ]
  },
  {
    path: '/auth/invitation',
    redirect: { name: 'Invite-Accept' }
  },
  {
    path: '/auth/invitation',
    component: InvitationView,
    children: [
      {
        path: 'signup',
        name: 'Invite-Sign-Up',
        component: InviteSignUp
        // beforeEnter: async (to, from, next) => {
        //   if (typeof to.query?.token === 'undefined') return next({ name: 'Sign-In' })
        // }
      },
      {
        path: 'accept',
        name: 'Invite-Accept',
        component: InviteAccept
        // beforeEnter: async (to, from, next) => {
        //   if (typeof to.query?.token === 'undefined') return next({ name: 'Sign-In' })
        // }
      }
    ]
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
  const authenticated = isAuthenticated()
  if (to.meta.requiresAuth && !authenticated) {
    next({ name: 'Sign-In' })
  } else if (!to.meta.requiresAuth && authenticated) {
    next({ name: 'Dashboard' })
  } else {
    next()
  }
})
export default router
