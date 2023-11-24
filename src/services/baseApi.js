/** @format */

import axios from "axios"

export const baseApi = axios.create({
  baseURL: "https://api.noroff.dev/api/v1/holidaze",
  withCredentials: true,
})
