import api from './api.service'
import { getToken } from '@/utils/helper'

class TaskService {
  getTasks(value) {
    return api
      .get(`workspaces/${value.workspaceid}/projects/${value.projectid}/tasks`, {
        headers: {
          Authorization: getToken()
        }
      })
      .then((response) => {
        return response.data
      })
  }
  getTask(value) {
    return api
      .get(`workspaces/${value.workspaceid}/projects/${value.projectid}/tasks/${value.id}`, {
        headers: {
          Authorization: getToken()
        }
      })
      .then((response) => {
        return response.data
      })
  }
  addTask(value) {
    return api
      .post(`workspaces/${value.workspaceid}/projects/${value.projectid}/tasks`, {
        task: value,
        headers: {
          'Cache-Control': 'no-store',
          'Content-Type': 'application/json',
          Authorization: getToken()
        }
      })
      .then((response) => {
        return response.data
      })
  }
  editTask(value) {
    return api
      .patch(`workspaces/${value.workspaceid}/projects/${value.projectid}/tasks/${value.id}`, {
        task: value,
        headers: {
          'Cache-Control': 'no-store',
          'Content-Type': 'application/json',
          Authorization: getToken()
        }
      })
      .then((response) => {
        return response.data
      })
  }
}

export default new TaskService()
