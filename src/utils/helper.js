import StorageService from '@/utils/storage'

export function formatDate(dateStr) {
  const dateObj = new Date(dateStr)
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function utf8_to_b64(str) {
  return btoa(unescape(encodeURIComponent(str)))
}

export function b64_to_utf8(str) {
  return decodeURIComponent(escape(atob(str)))
}

export function getUserID() {
  const token = StorageService.getCookie('rfc7519').access_token || null
  const userID = token ? JSON.parse(token) : { sub: null }
  return userID
}

export function isAuthenticated() {
  return StorageService.getLocalStorage('auth') && StorageService.getCookie('rfc7519')
}
