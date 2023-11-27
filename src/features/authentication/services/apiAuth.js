/** @format */

import { baseApi } from "@/services/baseApi"

export async function fetchSignup(data, options) {
  const res = await baseApi.post("auth/register", data, options)
  return res.data
}

export async function fetchLogin(data, options) {
  const res = await baseApi.post("auth/login", data, options)
  return res.data
}
