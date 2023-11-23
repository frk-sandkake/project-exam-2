/** @format */
import { Link, Outlet } from "react-router-dom"

export function RootLayout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/venues'>Venues</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  )
}
