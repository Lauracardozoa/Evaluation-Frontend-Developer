import { useAuth } from '@/contexts/AuthProvider'
import { HiOutlineExclamationCircle } from 'react-icons/hi2'
import { Button, Modal } from '../flowbite-react'

type LogoutModalProps = {
  /**
   * Show or hide the modal. Default is `false`.
   */
  show?: boolean

  /**
   * Executes a function when the modal is closed
   */
  onClose?(): void
}

/**
 * Modal to log out a user
 */
export default function LogoutModal({
  onClose,
  show = false,
}: LogoutModalProps) {
  const { signout } = useAuth()
  return (
    <Modal popup show={show} onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        <HiOutlineExclamationCircle
          size={120}
          className="text-slate-400 mx-auto"
        />

        <h3 className="text-center text-xl text-slate-500">
          Are you sure you want to logout?
        </h3>
        <div className="flex justify-evenly my-4">
          <Button
            color="failure"
            onClick={() => {
              signout()
              onClose?.()
            }}
          >
            Yes, I&apos;m sure
          </Button>
          <Button color="gray" onClick={onClose}>
            No, cancel
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}
