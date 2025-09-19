import { Customer } from '@/utils/customer.type'

import { CustomerData } from './components/customer-data'
import { DeleteButton } from './components/delete-button'

type CardCustomerProps = {
  customer: Customer
}

export const CardCustomer = ({ customer }: CardCustomerProps) => {
  return (
    <article className="space-y-3 rounded-lg border border-zinc-200 bg-zinc-50 p-4 shadow-md transition *:border-zinc-200 hover:scale-105">
      <CustomerData customer={customer} />
      <DeleteButton id={customer.id} />
    </article>
  )
}
