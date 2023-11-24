/** @format */

import { Form, Link } from "react-router-dom"
import { Button } from "../../../components/Button"

export function SignupForm({ defaultValue = {} }) {
  return (
    <>
      <Form method='post'>
        <div>
          <label
            htmlFor='username'
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            Username
          </label>
          <input
            type='text'
            name='username'
            id='username'
            defaultValue={defaultValue.username}
            className='my-input'
          />
        </div>
        <div>
          <label
            htmlFor='username'
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            Username
          </label>
          <input
            type='text'
            name='username'
            id='username'
            defaultValue={defaultValue.username}
            className='flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-cyan-500 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
          />
        </div>
      </Form>
      <Button color='primary' size='md'>
        <Link to='/login'>Take me to Login</Link>
      </Button>
    </>
  )
}
