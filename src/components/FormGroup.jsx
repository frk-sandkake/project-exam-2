/** @format */

export function FormGroup({ children, errorMessage = "" }) {
  return (
    <div
      className={`form-group mb-4 flex flex-col gap-0 flex-grow ${
        errorMessage.length > 0 ? "error" : ""
      }`}
    >
      {children}
      {errorMessage.length > 0 && (
        <div className='text-rose-500 font-sm'>{errorMessage}</div>
      )}
    </div>
  )
}
