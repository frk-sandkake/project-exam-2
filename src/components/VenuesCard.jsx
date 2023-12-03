/** @format */

import { Link } from "react-router-dom"
import { CameraIcon } from "@heroicons/react/24/outline"

export function VenuesCard({ venueId, price, name, media }) {
  return (
    <>
      <Link to={`/venues/${venueId}`} className='group shadow-sm rounded-lg'>
        <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7'>
          {media[0] ? (
            <img
              src={media[0]}
              alt={name}
              className='max-h-48 w-full object-cover object-center group-hover:opacity-75'
            />
          ) : (
            <CameraIcon className='max-h-48 w-full object-cover object-center group-hover:opacity-75' />
          )}
        </div>
        <h3 className='mt-4 text-sm text-gray-700'>{name}</h3>
        <p className='mt-1 text-lg font-medium text-gray-900'>{price}</p>
      </Link>
    </>
  )
}
