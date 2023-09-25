import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASE_URL

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Cache-Control': 'no-store',
    'Content-Type': 'application/json'
  }
})

export default axiosInstance
