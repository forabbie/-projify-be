import MemberService from '@/services/member.service'
import { defineStore } from 'pinia'

export default defineStore('member', {
  state: () => {
    return {
      members: [{}],
      schema: {
        recipient: 'required'
      },
      submission: false,
      show_alert: false,
      alert_variant: 'bg-blue-500',
      alert_msg: 'Please wait! We are saving your data.'
    }
  },
  mutations: {},
  actions: {
    async getWorkspaceMembers(workspaceid) {
      const result = await MemberService.getWorkspaceMembers(workspaceid)
      return result.data
    },
    async inviteMember(value) {
      const result = await MemberService.inviteMember(value)
      return result
    }
  }
})
