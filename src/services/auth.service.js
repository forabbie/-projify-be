import api from './api.service'
import { setCookie, deleteCookie, deleteLocalStorage } from '@/utils/storage'
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
          setCookie('rfc7519', token)
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
          setCookie('rfc7519', token)
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
          deleteCookie('rfc7519')
          deleteCookie('user')
          deleteLocalStorage('auth')
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
        if (response.data.data) {
          const user = {
            id: response.data.data.id,
            first_name: response.data.data.first_name,
            last_name: response.data.data.first_name,
            email: response.data.data.email
          }
          setCookie('user', user, 14)
        }
        return response.data.data
      })
  }
}

export default new AuthService()
