import WorkspaceService from '@/services/workspace.service'
import { defineStore } from 'pinia'

export default defineStore('workspace', {
  state: () => {
    return {
      workspaces: [{}],
      workspace: {
        id: '',
        name: '',
        description: '',
        is_creator: false
      },
      schema: {
        'workspace-name': 'required'
      },
      submission: false,
      show_alert: false,
      alert_variant: 'bg-blue-500',
      alert_msg: 'Please wait! We are saving your data.'
    }
  },
  mutations: {},
  actions: {
    async getUserWorkspaces() {
      const result = await WorkspaceService.getUserWorkspaces()
      return result
    },
    async getWorkspace(id) {
      const result = await WorkspaceService.getWorkspace(id)
      return result.data
    },
    async editWorkspace(value) {
      const result = await WorkspaceService.editWorkspace(value)
      return result.data
    }
  }
})
