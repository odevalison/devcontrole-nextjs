import { Toaster } from 'sonner'

import { AuthProvider } from './auth'
import { ModalProvider } from './modal'
import { ReactQueryProvider } from './react-query'

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ReactQueryProvider>
      <ModalProvider>
        <AuthProvider>
          <Toaster />
          {children}
        </AuthProvider>
      </ModalProvider>
    </ReactQueryProvider>
  )
}
