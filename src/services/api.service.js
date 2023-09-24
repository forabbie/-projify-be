import axios from 'axios'
import storageService from '@/utils/storage'

const baseURL = import.meta.env.VITE_API_BASE_URL
const token = storageService.getCookie('rfc7519') || null

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Cache-Control': 'no-store',
    'Content-Type': 'application/json',
    Authorization: token
  }
})

export default axiosInstance
