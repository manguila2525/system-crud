import axios from 'axios'
export const requests = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
})

requests.defaults.headers.common['Content-Type'] = 'multipart/form-data'
