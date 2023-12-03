/** @format */

import { baseApi } from "./baseApi"

export function getVenues(options) {
  return baseApi.get("venues?_limit=10", options).then((res) => res.data)
}
