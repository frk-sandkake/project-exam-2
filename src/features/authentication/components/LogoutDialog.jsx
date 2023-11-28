/** @format */

import { Dialog } from "@headlessui/react"

export function LogoutDialog({ open, onClose }) {
  return (
    <Dialog as='div' className='relative z-10' open={open} onClose={onClose}>
      <div className='fixed inset-0 bg-black/25' />
      <div className='fixed inset-0 overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4 text-center'>
          <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
            <Dialog.Title
              as='h3'
              className='text-lg font-medium leading-6 text-gray-900'
            >
              Bye for now
            </Dialog.Title>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}
