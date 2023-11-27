/** @format */
const sizes = {
  sm: "px-3 py-1 rounded-md text-sm",
  md: "px-4 py-2 rounded-md text-base",
  lg: "px-5 py-2 rounded-lg text-lg",
}

const colors = {
  primary:
    "ring-2 ring-purple-600 bg-purple-600 hover:bg-purple-700 text-white",
  secondary: "ring-2 ring-teal-600 bg-teal-600 hover:bg-teal-700 text-white",
  primaryOutline: "ring-2 ring-purple-600 hover:bg-purple-200 text-purple-700",
  secondaryOutline: "ring-2 ring-cyan-500 hover:bg-cyan-200 text-cyan-700",
  ghost: "ring-2 ring-slate-400 hover:bg-slate-100 text-slate-600",
}

export function Button({
  color,
  size,
  type,
  disabled,
  onClick,
  className,
  children,
}) {
  let colorClasses = colors[color]
  let sizeClasses = sizes[size]

  return (
    <>
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`font-bold ${sizeClasses} ${colorClasses} ${className}`}
      >
        {children}
      </button>
    </>
  )
}
