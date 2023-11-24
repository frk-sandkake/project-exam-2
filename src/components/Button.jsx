/** @format */
const sizes = {
  md: "px-4 py-2 rounded-md text-base",
  lg: "px-5 py-3 rounded-lg text-lg",
}

const colors = {
  primary: "bg-indigo-600 hover:bg-indigo-700 text-white",
  secondary: "bg-teal-600 hover:bg-teal-700 text-white",
}

export function Button({ color, size, children }) {
  let colorClasses = colors[color]
  let sizeClasses = sizes[size]

  return (
    <>
      <button
        type='button'
        className={`font-bold ${sizeClasses} ${colorClasses}`}
      >
        {children}
      </button>
    </>
  )
}
