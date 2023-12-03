/** @format */
import "@radix-ui/themes/styles.css"

import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom"
import { Container, Theme, ThemePanel } from "@radix-ui/themes"

import { AuthProvider } from "../features/authentication/"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

export function RootLayout() {
  const { state } = useNavigation()
  const isLoading = state === "loading"

  return (
    <Theme
      appearance='dark'
      accentColor='orange'
      grayColor='sand'
      radius='large'
    >
      <AuthProvider>
        <div className='w-full min-h-screen'>
          <Navbar />
          <ScrollRestoration />
          {isLoading && <div>Loading...</div>}
          <Container className={`min-h-screen ${isLoading ? "loading" : ""}`}>
            <Outlet />
          </Container>
          <div className=' bg-orange-900'>
            <Footer />
          </div>
        </div>
      </AuthProvider>
      <ThemePanel />
    </Theme>
  )
}
