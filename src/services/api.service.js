import axios from 'axios'
import { getToken } from '@/utils/helper'

const baseURL = import.meta.env.VITE_API_BASE_URL

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Cache-Control': 'no-store',
    'Content-Type': 'application/json',
    Authorization: getToken()
  }
})

axiosInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance
