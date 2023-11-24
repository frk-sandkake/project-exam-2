/** @format */

import { Link } from "react-router-dom"

/** @format */
const sizes = {
  md: "px-4 py-2 rounded-lg text-base",
  lg: "px-5 py-3 rounded-lg text-lg",
}

const colors = {
  dark: "text-orange-50 hover:bg-orange-600",
  light: "underline text-cyan-500 hover:text-cyan-600",
}

export function NavLink({ color, size, to, onClick, children }) {
  let colorClasses = colors[color]
  let sizeClasses = sizes[size]

  return (
    <>
      <Link
        to={to}
        className={`-mx-3 block font-semibold leading-7 ${sizeClasses} ${colorClasses}`}
        onClick={onClick}
      >
        {children}
      </Link>
    </>
  )
}
