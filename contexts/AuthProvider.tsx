import { createContext, useContext, useState } from 'react'

const AuthContext = createContext({
  isAuth: false,
  signin: () => {},
  signout: () => {},
})

type AuthProviderProps = {
  /**
   * Child component to provide the context
   */
  children: React.ReactNode
}

/**
 * Provides a fake authentication
 */
export default function AuthProvider({ children }: AuthProviderProps) {
  const [isAuth, setIsAuth] = useState(false)

  function signin() {
    setIsAuth(true)
  }

  function signout() {
    setIsAuth(false)
  }

  return (
    <AuthContext.Provider value={{ isAuth, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
