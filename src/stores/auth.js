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
    async getCurrentUser(token) {
      const user = await AuthService.currentUser(token)
      return user
    },
    async signout() {
      await AuthService.signout()
    }
  }
})
