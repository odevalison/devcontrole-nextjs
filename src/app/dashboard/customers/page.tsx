import { Suspense } from 'react'

import { CustomersList } from './components/customers-list'
import { LoadingMessage } from './components/loading-message'
import { NewCustomerModal } from './components/new-customer-modal'
import { OpenModalButton } from './components/open-modal-button'

const CustomersPage = () => {
  return (
    <main className="space-y-6.5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Clientes</h1>
        <OpenModalButton />
        <NewCustomerModal />
      </div>
      <Suspense fallback={<LoadingMessage />}>
        <CustomersList />
      </Suspense>
    </main>
  )
}

export default CustomersPage
