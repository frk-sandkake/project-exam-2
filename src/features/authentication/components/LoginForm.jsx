/** @format */
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Button } from "@/components/Button"
import { FormGroup } from "@/components/FormGroup"
import { useAuth } from "../hooks/useAuth"

export function LoginForm() {
  const { login } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  async function onSubmit(email, password) {
    await login(email, password).catch((error) => {
      if (error.response && error.response.data && error.response.data.errors) {
        const errorMessage = error.response.data.errors[0].message
        alert(errorMessage)
      } else {
        alert("Error", error.message)
      }
    })
  }

  return (
    <>
      <div className='w-96 py-6 flex flex-col gap-2'>
        <h1 className='py-4 text-4xl font-semibold text-slate-600'>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full p-2'>
          <FormGroup errorMessage={errors?.email?.message}>
            <label
              htmlFor='email'
              className='my-label text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='my-input'
              {...register("email", {
                required: { value: true, message: "Required" },
                validate: (value) => {
                  if (!value.endsWith("@stud.noroff.no")) {
                    return "Must end with @stud.noroff.no"
                  }
                },
              })}
            />
          </FormGroup>
          <FormGroup errorMessage={errors?.password?.message}>
            <label
              htmlFor='password'
              className='my-label text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              className='my-input'
              {...register("password", {
                required: { value: true, message: "Required" },
                minLength: {
                  value: 10,
                  message: "Must be at least 10 characters",
                },
                validate: {
                  hasLowerCase: (value) => {
                    if (!value.match(/[a-z]/)) {
                      return "Must include at least 1 lowercase letter"
                    }
                  },
                  hasUpperCase: (value) => {
                    if (!value.match(/[A-Z]/)) {
                      return "Must include at least 1 uppercase letter"
                    }
                  },
                  hasNumber: (value) => {
                    if (!value.match(/[0-9]/)) {
                      return "Must include at least 1 number"
                    }
                  },
                },
              })}
            />
          </FormGroup>
          <div className='py-6 flex flex-row justify-end gap-2'>
            <Button color='ghost' size='md'>
              <Link to='/'>Cancel</Link>
            </Button>
            <Button color='secondaryOutline' size='md'>
              <Link to='/signup'>Signup</Link>
            </Button>
            <Button
              type='submit'
              disabled={isSubmitting}
              color='primary'
              size='md'
            >
              {isSubmitting ? "Submitting" : "Login"}
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
