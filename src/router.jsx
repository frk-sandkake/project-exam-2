/** @format */
import { createBrowserRouter } from "react-router-dom"

import { RootLayout } from "./layouts/RootLayout"
import Home from "./Pages/Home"
import Venues from "./Pages/Venues"
import About from "./Pages/About"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
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
    ],
  },
])
