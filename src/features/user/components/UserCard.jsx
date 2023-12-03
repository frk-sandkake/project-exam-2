/** @format */
import { UserCircleIcon } from "@heroicons/react/24/solid"

export function UserCard({ userId, name }) {
  return (
    <div key={userId}>
      <h2>{name}</h2>
      <div class='col-span-full'>
        <label
          htmlFor='photo'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Photo
        </label>
        <div className='mt-2 flex items-center gap-x-3'>
          <UserCircleIcon className='h-12 w-12 text-gray-400' />
          <button
            type='button'
            className='rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
          >
            Change
          </button>
        </div>
        <div>UserEmail</div>
        <div>VenueManager</div>
        <div>BookingsCount</div>
        <div>VenuesCount</div>
      </div>
    </div>
  )
}
