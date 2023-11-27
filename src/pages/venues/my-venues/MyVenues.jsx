/** @format */

export function MyVenues() {
  const user = JSON.parse(localStorage.getItem("user"))
  const token = localStorage.getItem("token")

  // Use user and token as needed
  console.log(user)
  console.log(token)
  return <pre>user.name</pre>
}
