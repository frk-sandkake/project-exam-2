/** @format */
import { useAuth } from "../features/authentication/index"
import { Navigate, useLocation } from "react-router-dom"

export function AuthPage({ children }) {
  const { user, accessToken, isLoadingUser } = useAuth()
  const location = useLocation()

  if (!isLoadingUser) return <h1>Loading user...</h1>

  if (accessToken && user === null)
    return <Navigate to='/login' replace state={{ location }} />

  return children
}
