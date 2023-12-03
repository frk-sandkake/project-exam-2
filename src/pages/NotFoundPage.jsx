/** @format */

import { Navigate } from "react-router-dom"
import { Button } from "../components/Button"

export function NotFoundPage() {
  return (
    <div>
      <h1 className='text-green-600 text-3xl font-bold underline'>
        404 - Page not found
      </h1>
      <Button size='md' color='primaryOutlined'>
        <Navigate to='home' /> Take me Home
      </Button>
    </div>
  )
}
