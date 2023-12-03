/** @format */
import { useLoaderData } from "react-router-dom"
import { UserCircleIcon } from "@heroicons/react/24/solid"
import { fetchUser } from "../../services/userApi"
import { useAuth } from "../../features/authentication"
import { AvatarForm } from "../../features/user/components/AvatarForm"
import { AuthPage } from "../../components/AuthPage"
import * as Avatar from "@radix-ui/react-avatar"

function DashBoard() {
  const { user } = useAuth()
  const data = useLoaderData()

  return (
    <div className='w-full px-4'>
      <>
        <h1>My DashBoard</h1>
        <div>
          <h2>{user.name}</h2>
          <div className=''>
            <div className='mt-2 flex items-center gap-x-3'>
              <Avatar.Root className='bg-blackA1 inline-flex h-[60px] w-[60px] select-none items-center justify-center overflow-hidden rounded-full align-middle'>
                <Avatar.Image
                  className='h-full w-full rounded-[inherit] object-cover'
                  src={user.avatar}
                  alt='Colm Tuite'
                />
                <Avatar.Fallback
                  className='text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium'
                  delayMs={600}
                >
                  CT
                </Avatar.Fallback>
              </Avatar.Root>
              {user ? (
                <AvatarForm key={user.name} />
              ) : (
                <h2>Loading avatar...</h2>
              )}
            </div>
            <div>Email: {user.email}</div>
            {user.venueManager ? (
              <div>Role: Venue Manager</div>
            ) : (
              <div>Role: Traveller </div>
            )}
          </div>
        </div>
      </>
    </div>
  )
}

async function loader({ request, userId, data }) {
  return fetchUser({ request, data, userId })
}

export const userDashboardRoute = {
  loader,
  element: (
    <AuthPage>
      <DashBoard />
    </AuthPage>
  ),
}
