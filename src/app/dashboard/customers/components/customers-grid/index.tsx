"use client";

import { useCustomers } from "@/hooks/queries/user-customers";

import { CardCustomer } from "../card-customer";

export function CustomersGrid() {
  const { data: customers } = useCustomers();

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {!!customers?.length ? (
        customers.map((customer) => (
          <CardCustomer key={customer.id} customer={customer} />
        ))
      ) : (
        <p className="text-sm font-medium text-zinc-500">
          Nenhum cliente cadastrado.
        </p>
      )}
    </section>
  );
}
