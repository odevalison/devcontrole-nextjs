import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { Suspense } from 'react'

import { authOptions } from '@/lib/auth'

import { RefreshButton } from '../../../../components/refresh-button'
import { CustomersList } from './components/customers-list'
import { LoadingMessage } from './components/loading-message'
import { NewCustomerModal } from './components/new-customer-modal'
import { OpenModalButton } from './components/open-modal-button'

const CustomersPage = async () => {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect('/')
  }
  return (
    <main className="space-y-6.5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Clientes</h1>
        <div className="flex items-center gap-2">
          <RefreshButton />
          <OpenModalButton />
        </div>
        <NewCustomerModal />
      </div>
      <Suspense fallback={<LoadingMessage />}>
        <CustomersList />
      </Suspense>
    </main>
  )
}

export default CustomersPage
