/** @format */

import { Fragment, createContext, useState } from "react"
import {
  fetchSignup as signupService,
  fetchLogin as loginService,
} from "../services/apiAuth"
import { useLocation, useNavigate } from "react-router-dom"
import { Dialog, Transition } from "@headlessui/react"
import { Button } from "../../../components/Button"

export const Context = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState()
  let [isOpen, setIsOpen] = useState(true)

  const [isLoadingUser, setIsLoadingUser] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  function closeModal() {
    setIsOpen(false)
  }

  function signup(name, email, password, venueManager) {
    return signupService(name, email, password, venueManager).then((user) => {
      setUser(user)
      navigate(location.state?.location ?? "/")
    })
  }

  function login(email, password) {
    return loginService(email, password).then((user) => {
      setUser(user)
      navigate(location.state?.location ?? "/")
    })
  }
  return (
    <Context.Provider
      value={{
        user,
        isLoadingUser,
        signup,
        login,
        isLoadingUser: user != null,
      }}
    >
      {children}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    My title
                  </Dialog.Title>
                  <p className='text-sm text-gray-500'>Some text</p>
                  <div className='mt-4'>
                    <Button
                      type='button'
                      size='md'
                      color='secondaryOutline'
                      onClick={closeModal}
                    >
                      Close
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Context.Provider>
  )
}
