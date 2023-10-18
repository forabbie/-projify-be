import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated, getActiveIndex } from '@/utils/helper'
import { setLocalStorage } from '@/utils/storage'
import { getUserWorkspace } from '@/utils/workspace.utils'
import NotFoundView from '@/views/404View.vue'
import AuthView from '@/views/AuthView.vue'
import InvitationView from '@/views/InvitationView.vue'
import HomeView from '@/views/HomeView.vue'

const InviteSignUp = () =>
  import(
    /* webpackChunkName: "InviteSignUpChunk" */ '@/components/modules/invitation/InvitationSignUp.vue'
  )
const InviteSignIn = () =>
  import(
    /* webpackChunkName: "InviteSignInChunk" */ '@/components/modules/invitation/InvitationSignIn.vue'
  )
const Signin = () =>
  import(/* webpackChunkName: "SigninChunk" */ '@/components/modules/auth/TheSignIn.vue')
const Signup = () =>
  import(/* webpackChunkName: "SignupChunk" */ '@/components/modules/auth/TheSignUp.vue')
// const Dashboard = () =>
//   import(/* webpackChunkName: "DashboardChunk" */ '@/components/modules/TheDashboard.vue')
const Workspace = () =>
  import(/* webpackChunkName: "WorkspaceChunk" */ '@/components/modules/workspace/TheWorkspace.vue')

const routes = [
  {
    path: '/',
    meta: {
      requiresAuth: true
    },
    redirect: {
      name: 'Workspace',
      params: { workspaceid: parseInt(getActiveIndex()?.workspace.id) }
    }
  },
  {
    path: '/workspace',
    redirect: {
      name: 'Workspace',
      params: { workspaceid: parseInt(getActiveIndex()?.workspace.id) }
    }
  },
  {
    path: '/workspace/:workspaceid',
    component: HomeView,
    meta: {
      requiresAuth: true
    },
    beforeEnter: async (to, from, next) => {
      const id = to.params?.workspaceid || null
      try {
        const result = await getUserWorkspace()
        const idExists = result.some((workspace) => parseInt(workspace.id) === parseInt(id))
        if (idExists) {
          setLocalStorage('activeIndex', { workspace: id })
          next()
        } else {
          setLocalStorage('activeIndex', { workspace: result[0].id })
          next({ name: 'Workspace', params: { workspaceid: result[0].id } })
          return false
        }
      } catch (error) {
        console.error(error)
      }
    },
    children: [
      {
        path: '',
        name: 'Workspace',
        component: Workspace
      }
    ]
  },
  {
    path: '/auth/invitation',
    redirect: { name: 'Invite-Sign-In' }
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
        path: 'signin',
        name: 'Invite-Sign-In',
        component: InviteSignIn
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
  routes
  // linkExactActiveClass: 'text-yellow-500'
})

router.beforeEach((to, from, next) => {
  const authenticated = isAuthenticated()
  if (to.meta.requiresAuth && !authenticated) {
    next({ name: 'Sign-In' })
  } else if (!to.meta.requiresAuth && authenticated) {
    next({ name: 'Workspace' })
  } else {
    next()
  }
})
export default router
