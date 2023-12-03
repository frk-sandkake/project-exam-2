/** @format */

import { useEffect } from "react"
import { updateAvatar } from "../../../services/userApi"
import { useAuth } from "../../authentication"
import { Link } from "react-router-dom"
import { FormGroup } from "../../../components/FormGroup"
import { useForm } from "react-hook-form"
import { useLocalStorage } from "../../../hooks/useLocalStorage"
import { AxiosError } from "axios"
import { Flex, Button, Section } from "@radix-ui/themes"

export function AvatarForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ defaultValues: { avatar: "" } })
  const { user } = useAuth()
  const [avatar, setAvatar] = useLocalStorage(user.avatar, user.avatar)

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ avatar: "" })
    }
  }, [formState, reset, isSubmitSuccessful])

  async function onSubmit(value) {
    await updateAvatar(`profiles/${user.name}/media`, value)
      .then(() => {
        setAvatar(value)
      })
      .catch((error) => {
        if (
          error instanceof AxiosError &&
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          const errorMessage = error.response.data.errors[0].message
          alert(errorMessage)
        } else {
          alert("Error in onSubmit updateAvatar")
        }
      })
  }

  return (
    <Section className='mx-auto'>
      <form method='put' onSubmit={handleSubmit(onSubmit)}>
        <p>{errors?.root?.server && "Server error"}</p>
        <FormGroup errorMessage={errors?.avatar?.message}>
          <label
            id='avatar'
            htmlFor='avatar'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Photo
          </label>
          <input
            id='avatar'
            type='text'
            className='my-input'
            name={avatar}
            {...register("avatar", {
              required: { value: true, message: "Required" },
              validate: (value) => {
                if (!value.match("https://.*")) {
                  return "Must be an URL: 'https://some_image_url.com'"
                }
              },
            })}
            placeholder='https://your_avatar.com'
          />
        </FormGroup>
        <Flex justify='end' align='center' className='flex flex-row gap-2'>
          <Button asChild size='2' variant='ghost'>
            <Link to='.'> Cancel</Link>
          </Button>
          <Button size='2' variant='solid' disabled={isSubmitting}>
            {isSubmitting ? "Updating" : "Update"}
          </Button>
        </Flex>
      </form>
    </Section>
  )
}
