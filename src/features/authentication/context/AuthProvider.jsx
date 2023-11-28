/** @format */

import { createContext, useEffect, useState } from "react"
import {
  fetchSignup as signupService,
  fetchLogin as loginService,
} from "../services/apiAuth"
import { useLocation, useNavigate } from "react-router-dom"
import { LogoutDialog } from "@/features/authentication"
import { useLocalStorage } from "@/hooks/useLocalStorage"

export const Context = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", "")
  const [isLoadingUser, setIsLoadingUser] = useState(true)
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setIsLoadingUser(true)
    if (!isLoadingUser) {
      setUser(user, "")
      setIsLoadingUser(false)
    }
  }, [])

  async function signup(name, email, password, venueManager) {
    const user = await signupService(name, email, password, venueManager)
    setUser(user, "")
    navigate(location.state?.location ?? "/")
  }

  async function login(email, password) {
    const user = await loginService(email, password)
    setUser(user, "")
    console.log(user)
    navigate(location.state?.location ?? "/")
  }

  const logout = () => {
    setIsLogoutModalOpen(true)
    logoutUser()
  }

  const logoutUser = () => {
    setUser()
    setEmail()
    localStorage.clear()
    setTimeout(() => {
      setIsLogoutModalOpen(false)
    }, 2000)
  }

  return (
    <Context.Provider
      value={{
        user,
        isLoadingUser,
        signup,
        login,
        logout,
        isLogoutModalOpen,
        isLoadingUser: user != null,
      }}
    >
      {children}
      <LogoutDialog
        open={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
      ></LogoutDialog>
    </Context.Provider>
  )
}
