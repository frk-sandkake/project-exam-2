/** @format */

import { createContext, useEffect, useState } from "react"
import {
  fetchSignup as signupService,
  fetchLogin as loginService,
} from "../services/apiAuth"
import { useLocation, useNavigate } from "react-router-dom"
import { LogoutDialog } from "../components/LogoutDialog"
import { useLocalStorage } from "../../../hooks/useLocalStorage"

export const Context = createContext(null)

export function AuthProvider({ children }) {
  let [user, setUser] = useLocalStorage("user", "")
  const [accessToken, setAccessToken] = useState(false)
  const [isLoadingUser, setIsLoadingUser] = useState(true)
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setIsLoadingUser(true)
    localStorage.getItem(accessToken)
    if (accessToken) {
      setAccessToken(true)
      setUser(user)
      setIsLoadingUser(false)
    }
  }, [])

  function signup(name, email, venueManager) {
    return signupService(name, email, venueManager).then((user) => {
      setUser(user, user)
      const accessToken = user.accessToken
      localStorage.setItem("accessToken", accessToken)
      const userId = user.name
      localStorage.setItem("userId", userId)
      navigate(location.state?.location ?? "/")
    })
  }

  function login(email, password) {
    return loginService(email, password).then((user) => {
      setUser(user, user)
      const accessToken = user.accessToken
      localStorage.setItem("accessToken", accessToken)
      const userId = user.name
      localStorage.setItem("userId", userId)
      navigate(location.state?.location ?? "/")
    })
  }

  function getNameFromStorage() {
    const user = localStorage.getItem(user)
    if (user) {
      return user.name
    }
    return null
  }

  const logout = () => {
    setIsLogoutModalOpen(true)
    setUser()
    setAccessToken(false)
    localStorage.clear()

    setTimeout(() => {
      setIsLogoutModalOpen(false)
      navigate(location.state?.location ?? "/")
    }, 2000)
  }

  return (
    <Context.Provider
      value={{
        user,
        isLoadingUser,
        accessToken,
        signup,
        login,
        logout,
        getNameFromStorage,
        isLoggedIn: user != null,
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
