import TaskService from '@/services/task.service'
import { defineStore } from 'pinia'

export default defineStore('task', {
  state: () => {
    return {
      tasks: [{}],
      task: {
        id: null,
        title: null,
        description: null,
        notes: null,
        owner: null,
        project_id: null,
        deadline: null,
        status: null,
        priority: null,
        owner_email: null,
        name: null
      },
      schema: {
        'task-title': 'required'
      },
      submission: false,
      show_alert: false,
      alert_variant: 'bg-blue-500',
      alert_msg: 'Please wait! We are saving your data.',
      statuses: [
        { id: 1, name: 'not started' },
        { id: 2, name: 'in progress' },
        { id: 3, name: 'completed' },
        { id: 4, name: 'stuck' }
      ],
      priorities: [
        { id: 1, name: 'high' },
        { id: 2, name: 'medium' },
        { id: 3, name: 'low' }
      ]
    }
  },
  mutations: {},
  actions: {
    async getTasks(value) {
      const result = await TaskService.getTasks(value)
      return result
    },
    async getTask(value) {
      const result = await TaskService.getTask(value)
      return result.data
    },
    async addTask(value) {
      const result = await TaskService.addTask(value)
      return result.data
    },
    async editTask(value) {
      const result = await TaskService.editTask(value)
      return result.data
    }
  }
})
