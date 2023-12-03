/** @format */

//import { Dialog } from "@headlessui/react"
import { AlertDialog } from "@radix-ui/themes"

export function LogoutDialog({ open, onOpenChange }) {
  return (
    <>
      <div>
        <AlertDialog.Root open={open} onOpenChange={onOpenChange}>
          <AlertDialog.Trigger>Open</AlertDialog.Trigger>
          <AlertDialog.Content style={{ maxWidth: 450 }}>
            <AlertDialog.Title>Revoke access</AlertDialog.Title>
            <AlertDialog.Description size='2'>
              Logging out..
            </AlertDialog.Description>
          </AlertDialog.Content>
        </AlertDialog.Root>
      </div>
    </>
  )
}
