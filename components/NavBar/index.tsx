'use client'
import { useAuth } from '@/contexts/AuthProvider'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import LogoutModal from './LogoutModal'
import RegisterLoginModal from './RegisterLoginModal'
import { Button, Navbar } from '../flowbite-react'

/**
 * Navigation bar of the application
 */
export default function NavBar() {
  const { isAuth } = useAuth()
  const pathname = usePathname()
  const [showRegisterLogin, setShowRegisterLogin] = useState(false)
  const [showLogout, setShowLogout] = useState(false)
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          NCoding
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {isAuth ? (
          <Button onClick={() => setShowLogout(true)}>Logout</Button>
        ) : (
          <Button onClick={() => setShowRegisterLogin(true)}>
            Register or Login
          </Button>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} href="/" active={pathname === '/'}>
          Available Courses
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          Continuing Education
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/my-courses"
          active={pathname === '/my-courses'}
        >
          My Courses
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          Community
        </Navbar.Link>
      </Navbar.Collapse>
      <RegisterLoginModal
        show={showRegisterLogin}
        onClose={() => setShowRegisterLogin(false)}
      />
      <LogoutModal show={showLogout} onClose={() => setShowLogout(false)} />
    </Navbar>
  )
}
