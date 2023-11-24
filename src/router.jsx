/** @format */
import { Navigate, createBrowserRouter } from "react-router-dom"

import { RootLayout } from "./layouts/RootLayout"
import Home from "./Pages/Home"
import Venues from "./Pages/Venues"
import About from "./Pages/About"
import { ErrorPage } from "./pages/ErrorPage"
import { NotFoundPage } from "./pages/NotFoundPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
        path: "about",
        element: <About />,
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
])
