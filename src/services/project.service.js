import api from './api.service'
import { getToken } from '@/utils/helper'

class ProjectService {
  getUserProjects(workspaceid) {
    return api
      .get(`workspaces/${workspaceid}/projects`, {
        headers: {
          Authorization: getToken()
        }
      })
      .then((response) => {
        return response.data
      })
  }
  getUserProject(value) {
    return api
      .get(`workspaces/${value.workspaceid}/projects/${value.projectid}`, {
        headers: {
          Authorization: getToken()
        }
      })
      .then((response) => {
        return response.data
      })
  }
  addUserProject(value) {
    return api
      .post(`workspaces/${value.workspaceid}/projects`, {
        project: {
          title: value.title,
          details: value.details,
          expected_completion_date: value.expected_completion_date
        },
        headers: {
          Authorization: getToken()
        }
      })
      .then((response) => {
        return response.data
      })
  }
  editUserProject(value) {
    return api
      .patch(`workspaces/${value.workspaceid}/projects/${value.projectid}`, {
        project: {
          title: value.title,
          details: value.details,
          expected_completion_date: value.expected_completion_date
        },
        headers: {
          Authorization: getToken()
        }
      })
      .then((response) => {
        return response.data
      })
  }
  addUserToProject(value) {
    return api
      .post(
        `workspaces/${value.workspaceid}/projects/${value.projectid}/add-member?user_id=${value.user_id}`,
        {
          role: 'member',
          headers: {
            Authorization: getToken()
          }
        }
      )
      .then((response) => {
        return response.data
      })
  }
}

export default new ProjectService()
