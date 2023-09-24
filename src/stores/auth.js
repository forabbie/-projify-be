import AuthService from '@/services/auth.service'
import { defineStore } from 'pinia'

export default defineStore('auth', {
  state: () => {},
  mutations: {},
  actions: {
    async signup(values) {
      const result = await AuthService.signup(values)
      return result
    },
    async signin(values) {
      const result = await AuthService.signin(values)
      return result
    },
    async get_current_user() {
      const user = await AuthService.currentUser()
      return user
    },
    async signout() {
      await AuthService.signout()
    }
  }
})
