import api from './api.service'
import storageService from '@/utils/storage'
import { getToken } from '@/utils/helper'

class AuthService {
  signup(user) {
    return api
      .post('signup', {
        user: {
          email: user.email,
          password: user.password
        }
      })
      .then((response) => {
        if (response.status == 200) {
          const token = response.headers.get('Authorization')
          storageService.setCookie('rfc7519', token)
          this.currentUser(token)
        }
        return response.data
      })
  }
  signin(user) {
    return api
      .post('auth/signin', {
        user: {
          email: user.email,
          password: user.password
        }
      })
      .then((response) => {
        if (response.status == 200) {
          const token = response.headers.get('Authorization')
          storageService.setCookie('rfc7519', token)
          this.currentUser(token)
        }
        return response.data
      })
  }
  signout() {
    return api
      .delete('auth/signout', {
        headers: {
          Authorization: getToken()
        }
      })
      .then((response) => {
        if (response.data) {
          storageService.deleteCookie('rfc7519')
          storageService.deleteCookie('user')
          storageService.deleteLocalStorage('auth')
        }
        return response.data
      })
  }
  currentUser(token) {
    return api
      .get('users/current', {
        headers: {
          Authorization: token
        }
      })
      .then((response) => {
        if (response.data) {
          const user = {
            id: response.data.id,
            first_name: response.data.first_name,
            last_name: response.data.first_name,
            email: response.data.email
          }
          storageService.setCookie('user', user, 14)
        }
        return response.data
      })
  }
}

export default new AuthService()
