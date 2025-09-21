'use client'

import { Loader2 } from 'lucide-react'

import { useGetUserCustomers } from '@/hooks/queries/use-get-user-customers'

import { CardCustomer } from '../card-customer'

export const CustomersList = () => {
  const { data: customers, isFetching } = useGetUserCustomers()
  const userHaveCustomers = !!customers?.length

  return (
    <>
      {userHaveCustomers ? (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {customers.map((customer) => (
            <CardCustomer key={customer.id} customer={customer} />
          ))}
        </section>
      ) : isFetching ? (
        <p className="flex items-center gap-2 text-sm font-medium text-zinc-500">
          <Loader2 className="size-4 animate-spin" /> Buscando clientes...
        </p>
      ) : (
        <p className="text-sm font-medium text-zinc-500">
          Você não possui clientes cadastrados.
        </p>
      )}
    </>
  )
}
