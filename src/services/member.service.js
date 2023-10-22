import api from './api.service'
import { getToken } from '@/utils/helper'

class MemberService {
  getWorkspaceMembers(workspaceid) {
    return api
      .get(`workspaces/${workspaceid}/members`, {
        headers: {
          Authorization: getToken()
        }
      })
      .then((response) => {
        return response.data
      })
  }
  inviteMember(value) {
    return api
      .post(`workspaces/${value.workspaceid}/invitations/send`, {
        invitation: {
          recipient_email: value.recipient_email
        },
        headers: {
          Authorization: getToken()
        }
      })
      .then((response) => {
        return response.data
      })
  }
}

export default new MemberService()
