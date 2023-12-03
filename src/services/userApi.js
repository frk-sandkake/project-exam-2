/** @format */

import { useLocalStorage } from "../hooks/useLocalStorage"
import { baseApi } from "./baseApi"

export async function fetchUser(url, params) {
  const res = await baseApi.get(`profiles`, url, params)
  return res.data
}

export async function updateAvatar(url, data) {
  const res = await baseApi.put(url, data)
  return res.data
}
