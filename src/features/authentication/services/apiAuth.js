/** @format */

import { baseApi } from "@/services/baseApi"

export function signup(data, options) {
  return baseApi.post("auth/register", data, options).then((res) => res.data)
}
