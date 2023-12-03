/** @format */

import { useLoaderData } from "react-router-dom"
import { getVenues } from "../services/venuesApi"
import { VenuesCard } from "../components/VenuesCard"

export function Venues() {
  const {
    venues,
    searchParams: { query },
  } = useLoaderData()
  console.log(venues)

  return (
    <>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h1 className='text-3xl'>Venues</h1>
        <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {venues.map((venue) => (
            <VenuesCard key={venue.id} {...venue} />
          ))}
        </div>
      </div>
    </>
  )
}

async function loader({ request: { signal, url } }) {
  const searchParams = new URL(url).searchParams
  const query = searchParams.get("query")
  const venues = getVenues({ signal })

  return {
    venues: await venues,
    searchParams: { query },
  }
}

export const venuesListRoute = {
  loader,
  element: <Venues />,
}
