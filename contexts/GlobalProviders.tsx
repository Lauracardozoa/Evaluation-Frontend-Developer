'use client'
import AuthProvider from '@/contexts/AuthProvider'
import { SWRConfig } from 'swr'

type GlobalProvidersProps = {
  /**
   * Child components which consume to the providers
   */
  children: React.ReactNode
}

/**
 * Adds all the used providers in the client side for the whole application
 */
export default function GlobalProviders({ children }: GlobalProvidersProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <AuthProvider>{children}</AuthProvider>
    </SWRConfig>
  )
}
