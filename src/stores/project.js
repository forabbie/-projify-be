import ProjectService from '@/services/project.service'
import { defineStore } from 'pinia'

export default defineStore('project', {
  state: () => {
    return {
      projects: [{}],
      project: { id: '', title: '', details: '', expected_completion_date: '' },
      schema: {
        'project-title': 'required'
      },
      submission: false,
      show_alert: false,
      alert_variant: 'bg-blue-500',
      alert_msg: 'Please wait! We are saving your data.'
    }
  },
  mutations: {},
  actions: {
    async getUserProjects(workspaceid) {
      const result = await ProjectService.getUserProjects(workspaceid)
      return result
    },
    async getUserProject(value) {
      const result = await ProjectService.getUserProject(value)
      return result.data
    },
    async addUserProject(value) {
      const result = await ProjectService.addUserProject(value)
      return result
    },
    async editUserProject(value) {
      const result = await ProjectService.editUserProject(value)
      return result
    },
    async addUserToProject(value) {
      const result = await ProjectService.addUserToProject(value)
      return result
    }
  }
})
