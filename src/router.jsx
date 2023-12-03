/** @format */
import { Navigate, createBrowserRouter, useRouteError } from "react-router-dom"

import { RootLayout } from "./layouts/RootLayout"
import { AuthLayout } from "./layouts/AuthLayout"
import { UserLayout } from "./layouts/UserLayout"

import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { NotFoundPage } from "./pages/NotFoundPage"
import { LoginForm, SignupForm } from "./features/authentication"
import { myVenuesRoute } from "./pages/venues/my-venues"
import { userDashboardRoute } from "./pages/user/Dashboard"
import { venuesListRoute } from "./pages/Venues"
import {
  AvatarForm,
  // loader as editAvatarLoader,
  // action as editavatarAction,
} from "./features/user/components/AvatarForm"

export const router = createBrowserRouter([
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
        children: [
          {
            index: true,
            ...venuesListRoute,
          },
        ],
      },
      {
        path: "user",
        element: <UserLayout />,
        errorElement: <ErrorPage />,

        children: [
          {
            path: ":userId",
            ...userDashboardRoute,
          },

          {
            path: "avatar",
            element: <AvatarForm />,
            errorElement: <ErrorPage />,
            // loader: editAvatarLoader,
            // action: editavatarAction,
          },
        ],
      },
      {
        path: "venu",
        children: [
          {
            index: true,
            path: "venues",
            ...myVenuesRoute,
          },
        ],
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
])

function ErrorPage() {
  const error = useRouteError()
  return (
    <div className='mx-auto h-full'>
      <h1 className='text-slate-600 text-3xl font-bold underline'>Error</h1>

      {"production" && (
        <div className=''>
          <p>Message: {error.message}</p>
          <p className=''>Status: {error.statusText}</p>
          <p className=''>Stack: {error.stack}</p>
        </div>
      )}
    </div>
  )
}
