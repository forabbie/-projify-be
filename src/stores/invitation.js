import InvitationService from '@/services/invitation.service'
import { defineStore } from 'pinia'

export default defineStore('invitation', {
  state: () => {
    return {
      isValidInvitation: false
    }
  },
  mutations: {},
  actions: {
    async accept(token) {
      const result = await InvitationService.accept(token)
      return result
    },
    async validate(token) {
      const result = await InvitationService.validate(token)
      return result
    }
  }
})
