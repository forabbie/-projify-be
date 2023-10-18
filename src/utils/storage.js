import { utf8_to_b64, b64_to_utf8 } from './helper'

export const setCookie = (key, str, exdays) => {
  const value = JSON.stringify(str)
  const encode = utf8_to_b64(value)
  const d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  let expires = 'expires=' + d.toUTCString()
  document.cookie = key + '=' + encode + ';' + expires + ';path=/;samesite'
}

export const getCookie = (key) => {
  let name = key + '='
  let ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      const decode = b64_to_utf8(c.substring(name.length, c.length))
      return JSON.parse(decode)
    }
  }
  return ''
}

export const deleteCookie = (key) => {
  const d = new Date()
  let expires = 'expires=' + d.toUTCString()
  document.cookie = key + '=' + ';Path=/' + ';' + expires
}

export const setLocalStorage = (key, str) => {
  const value = JSON.stringify(str)
  const encode = utf8_to_b64(value)
  localStorage.setItem(key, encode)
}

export const getLocalStorage = (key) => {
  if (localStorage.getItem(key)) {
    const decode = b64_to_utf8(localStorage.getItem(key)) || ''
    return JSON.parse(decode)
  }
  return ''
}

export const deleteLocalStorage = (key) => {
  localStorage.removeItem(key)
}

export const setSessionStorage = (key = '', str = {}, isEncrypt = true) => {
  const value = JSON.stringify(str)
  const code = isEncrypt ? utf8_to_b64(value) : value
  const encode = code
  sessionStorage.setItem(key, encode)
}

export const getSessionStorage = (key = '', isEncrypt = true) => {
  if (sessionStorage.getItem(key)) {
    const code = isEncrypt
      ? b64_to_utf8(sessionStorage.getItem(key) || '{}')
      : sessionStorage.getItem(key)
    const decode = code || ''
    return JSON.parse(decode)
  }
  return ''
}

export const deleteSessionStorage = (key = '') => {
  sessionStorage.removeItem(key)
}
