/** @format */

import { NavLink, Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../features/authentication"

export function UserLayout() {
  const { user } = useAuth()
  const location = useLocation()

  const userId = user.name

  return (
    <>
      {userId ? (
        <div className='mx-auto max-w-5xl pt-2 px-2 sm:px-6 lg:px-8 shadow-md'>
          <nav className='flex flex-row justify-start items-center gap-2'>
            <NavLink
              to='/user/:userId'
              end
              className={({ isActive }) =>
                isActive ? "dashboard-active" : "dashboard"
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to='#'
              className={({ isActive }) =>
                isActive ? "dashboard-active" : "dashboard"
              }
            >
              Bookings
            </NavLink>
            <NavLink
              to='#'
              className={({ isActive }) =>
                isActive ? "dashboard-active" : "dashboard"
              }
            >
              Reviews
            </NavLink>
          </nav>
        </div>
      ) : (
        <Navigate to='/login' replace state={{ location }} />
      )}

      <main className='mx-auto max-w-5xl py-4 px-2 sm:px-6 lg:px-8 flex flex-col justify-center items-center h-full'>
        <Outlet />
      </main>
    </>
  )
}
