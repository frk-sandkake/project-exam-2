/** @format */

import axios from "axios"

export const baseApi = axios.create({
  baseURL: "https://api.noroff.dev/api/v1/holidaze",
  headers: {
    "Content-type": "application/json",
  },
})

baseApi.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken")
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => Promise.reject(error)
)
