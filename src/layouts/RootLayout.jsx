/** @format */
import { Link, Outlet } from "react-router-dom"
import { Dialog } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { NavLink } from "../components/NavLink"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export function RootLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className='bg-orange-800'>
        <nav
          className='mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8'
          aria-label='Global'
        >
          <div className='flex sm:flex-1'>
            <Link to='home' className='-m-1.5 px-1.5 py-2 ring-0'>
              <span className='sr-only'>Holidaze Logo</span>
              <img
                className='h-12 w-auto rounded-lg'
                src='/2.png'
                alt='Holidaze Logo'
              />
            </Link>
          </div>
          <div className='flex sm:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-orange-100'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-8 w-8' aria-hidden='true' />
            </button>
          </div>
          <ul className='hidden sm:flex sm:gap-x-8 md:gap-x-12'>
            <li>
              <NavLink size='md' color='dark' to='home'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink size='md' color='dark' to='venues'>
                Venues
              </NavLink>
            </li>
            <li>
              <NavLink size='md' color='dark' to='about'>
                About
              </NavLink>
            </li>
          </ul>
          <div className='hidden sm:flex sm:flex-1 sm:justify-end'>
            <Link
              to='login'
              className='px-3 py-2 text-sm font-semibold leading-6 text-orange-100  hover:bg-orange-500'
            >
              Log in <span aria-hidden='true'>&rarr;</span>
            </Link>
            <Link
              to='signup'
              className='px-3 py-2 text-sm font-semibold leading-6 text-orange-100  hover:bg-orange-500'
            >
              Sign in <span aria-hidden='true'>&rarr;</span>
            </Link>
          </div>
        </nav>
        <Dialog
          as='div'
          className='sm:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className='fixed inset-0 z-10' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-orange-800 px-6 py-2'>
            <div className='flex items-center justify-between'>
              <Link to='home' className='-m-1.5 p-1.5 py-2 ring-0'>
                <span className='sr-only'>Holidaze</span>
                <img
                  className='h-12 rounded-lg w-auto'
                  src='/2.png'
                  alt='Holidaze Logo'
                />
              </Link>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-orange-100 ring-0'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-8 w-8' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 px-4 flow-root'>
              <div
                role='none'
                aria-label='divider'
                className='-my-6 py-1 divide-y divide-orange-200'
              >
                <div role='none' aria-label='divider'>
                  <ul className='space-y-2 py-6'>
                    <li>
                      <NavLink
                        size='md'
                        color='dark'
                        to='home'
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        size='md'
                        color='dark'
                        to='venues'
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Venues
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        size='md'
                        color='dark'
                        to='about'
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        About
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className='py-6'>
                  <Link
                    to='#'
                    className='py-2 block text-sm font-semibold leading-6 text-orange-100  hover:bg-orange-500'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Log in <span aria-hidden='false'>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  )
}
