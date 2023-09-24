import { defineStore } from 'pinia'

export default defineStore('layout', {
  state: () => {
    return {
      userLoggedIn: false
    }
  },
  mutations: {
    toggleUserLogIn(state) {
      state.userLoggedIn = !state.userLoggedIn
    }
  }
})
