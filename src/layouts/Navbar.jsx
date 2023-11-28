/** @format */
import { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { Link, NavLink } from "react-router-dom"
import { useAuth } from "@/features/authentication"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export function Navbar() {
  const { user, logout } = useAuth()

  return (
    <Disclosure as='nav' className='bg-orange-900 text-orange-50'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-orange-50 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-50'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <Link to='home' className='flex flex-shrink-0 items-center'>
                  <img
                    className='h-10 w-auto'
                    src='/2.png'
                    alt='Holidaze Logo'
                  />
                </Link>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4'>
                    <NavLink
                      to='home'
                      className={({ isActive }) =>
                        isActive ? "active-orange" : "nav-link-orange"
                      }
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to='venues'
                      className={({ isActive }) =>
                        isActive ? "active-orange" : "nav-link-orange"
                      }
                    >
                      Venues
                    </NavLink>
                    <NavLink
                      to='about'
                      className={({ isActive }) =>
                        isActive ? "active-orange" : "nav-link-orange"
                      }
                    >
                      About
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                {user ? (
                  <button
                    type='button'
                    className='relative rounded-full bg-orange-50 p-1 text-orange-400 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-orange-600'
                  >
                    <span className='absolute -inset-1.5' />
                    <span className='sr-only'>View notifications</span>
                    <BellIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                ) : (
                  ""
                )}

                {/* Profile dropdown */}
                {user ? (
                  <Menu as='div' className='relative ml-3'>
                    <div>
                      <Menu.Button className='relative flex nav-link'>
                        <span className='absolute -inset-1.5' />
                        <span className='sr-only'>Open user menu</span>
                        {user.name}
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href='#'
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href='#'
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                              onClick={logout}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <NavLink
                    to='login'
                    className={({ isActive }) =>
                      isActive ? "active-teal" : "nav-link-teal"
                    }
                  >
                    Login
                  </NavLink>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2 w-full'>
              <Disclosure.Button classname='w-full'>
                <div className='mt-6 px-4 flex flex-col gap-2 w-full'>
                  <NavLink
                    to='home'
                    className={({ isActive }) =>
                      isActive ? "active-orange" : "nav-link-orange"
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to='venues'
                    className={({ isActive }) =>
                      isActive ? "active-orange" : "nav-link-orange"
                    }
                  >
                    Venues
                  </NavLink>
                  <NavLink
                    to='about'
                    className={({ isActive }) =>
                      isActive ? "active-orange" : "nav-link-orange"
                    }
                  >
                    About
                  </NavLink>
                </div>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
