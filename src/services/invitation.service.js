import api from './api.service'
// import storageService from '@/utils/storage'
import { getToken } from '@/utils/helper'

class InvitationService {
  accept(token) {
    return api
      .post('invitations/accept', {
        token: token
      })
      .then((response) => {
        return response
      })
  }
  validate(token) {
    return api
      .get('invitations/validate', {
        params: {
          token: token
        },
        headers: {
          Authorization: getToken()
        }
      })
      .then((response) => {
        // if (response.data) {
        //   storageService.deleteCookie('rfc7519')
        //   storageService.deleteCookie('user')
        //   storageService.deleteLocalStorage('auth')
        // }
        return response.data
      })
  }
}

export default new InvitationService()
