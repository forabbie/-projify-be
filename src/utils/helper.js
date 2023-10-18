import { getCookie, getLocalStorage } from '@/utils/storage'

// date formatter
export const formatDate = (dateStr = '') => {
  const dateObj = new Date(dateStr)
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// encryption
export const utf8_to_b64 = (str = '') => {
  return btoa(unescape(encodeURIComponent(str)))
}

// decryption
export const b64_to_utf8 = (str = '') => {
  return decodeURIComponent(escape(atob(str)))
}

// storage checker
export const isAuthenticated = () => {
  return getLocalStorage('auth') && getCookie('rfc7519')
}

export const getToken = () => {
  const token = getCookie('rfc7519') || null
  return token // ? token.replace('Bearer ', '') : null
}

export const getActiveIndex = () => {
  const index = getLocalStorage('activeIndex') || null
  return index // ? token.replace('Bearer ', '') : null
}
