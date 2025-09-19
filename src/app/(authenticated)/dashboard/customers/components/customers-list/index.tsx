import { getUserCustomers } from '@/app/actions/get-user-customers'

import { CardCustomer } from '../card-customer'

export const CustomersList = async () => {
  const customers = await getUserCustomers()
  const userHaveCustomers = !!customers?.length

  return (
    <>
      {userHaveCustomers ? (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {customers.map((customer) => (
            <CardCustomer key={customer.id} customer={customer} />
          ))}
        </section>
      ) : (
        <p className="text-sm font-medium text-zinc-500">
          Você não possui nenhum cliente cadastrado.
        </p>
      )}
    </>
  )
}
