/** @format */
import { Navigate, createBrowserRouter, useRouteError } from "react-router-dom"

import { RootLayout } from "./layouts/RootLayout"
import Home from "./Pages/Home"
import Venues from "./Pages/Venues"
import About from "./Pages/About"
import { NotFoundPage } from "./pages/NotFoundPage"
import { AuthLayout, LoginForm, SignupForm } from "./features/authentication"
import { MyVenues } from "./pages/venues/my-venues/MyVenues"

export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [{ index: true, element: <Navigate to='/home' /> }],
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "venues",
        element: <Venues />,
      },
      {
        path: "listings",
        element: <MyVenues />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        element: <AuthLayout />,
        children: [
          { path: "login", element: <LoginForm /> },
          { path: "signup", element: <SignupForm /> },
        ],
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]

function ErrorPage() {
  const error = useRouteError()
  return (
    <>
      <h1 className='text-slate-600 text-3xl font-bold underline'>Error</h1>
      {"production" && (
        <>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </>
      )}
    </>
  )
}
