/** @format */

import axios from "axios"

export const baseApi = axios.create({
  baseURL: "https://api.noroff.dev/api/v1/holidaze",
})

baseApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)
