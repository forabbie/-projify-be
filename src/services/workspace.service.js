import api from './api.service'
import { getToken } from '@/utils/helper'

class WorkspaceService {
  getUserWorkspaces() {
    return api
      .get('workspaces', {
        headers: {
          Authorization: getToken()
        }
      })
      .then((response) => {
        return response.data
      })
  }
  getUserWorkspace(id) {
    return api
      .get(`workspaces/${id}`, {
        headers: {
          Authorization: getToken()
        }
      })
      .then((response) => {
        return response.data
      })
  }
  editWorkspace(value) {
    return api
      .patch(`workspaces/${value.id}`, {
        workspace: value,
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

export default new WorkspaceService()
