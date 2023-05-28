import { useState } from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { Button, Modal } from '../flowbite-react'

type RegisterLoginModalProps = {
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
 * Modal for register or login to a user account
 */
export default function RegisterLoginModal({
  onClose,
  show = false,
}: RegisterLoginModalProps) {
  const [active, setActive] = useState<'login' | 'signup'>('login')
  const activeClassname = 'bg-white border-2 border-blue-500'
  const deactiveClassname = 'hover:bg-slate-200'
  return (
    <Modal show={show} onClose={onClose} size="3xl">
      <Modal.Header>Register as a new student</Modal.Header>
      <Modal.Body>
        <div className="bg-slate-100 rounded-full">
          <span
            className={`w-1/2 inline-block text-center py-1 rounded-full ${
              active === 'login' ? activeClassname : deactiveClassname
            }`}
            onClick={() => setActive('login')}
          >
            Login
          </span>
          <span
            className={`w-1/2 inline-block text-center py-1 rounded-full ${
              active === 'signup' ? activeClassname : deactiveClassname
            }`}
            onClick={() => setActive('signup')}
          >
            Sign Up
          </span>
        </div>
        <div className="grid grid-cols-2 divide-x mt-8">
          {active === 'login' ? <LoginForm /> : <RegisterForm />}
          <div className="flex px-8">
            <div className="m-auto w-full inline-flex flex-col gap-y-2">
              <Button color="light">
                <FaLinkedinIn />
                <span className="ml-2">Continue with Linkedin</span>
              </Button>
              <Button color="light">
                <FaFacebook />
                <span className="ml-2">Continue with Facebook</span>
              </Button>
              <Button color="light">
                <FaInstagram />
                <span className="ml-2">Continue with Instagram</span>
              </Button>
              <Button color="light">
                <FaGoogle />
                <span className="ml-2">Continue with Google</span>
              </Button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
