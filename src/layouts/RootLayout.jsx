/** @format */
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom"
import { AuthProvider } from "../features/authentication"
import { Navbar } from "./Navbar"

export function RootLayout() {
  const { state } = useNavigation()
  const isLoading = state === "loading"

  return (
    <AuthProvider>
      <Navbar />
      <ScrollRestoration />
      {isLoading && <div>Loading...</div>}
      <div className={`${isLoading ? "loading" : ""}`}>
        <Outlet />
      </div>
    </AuthProvider>
  )
}
