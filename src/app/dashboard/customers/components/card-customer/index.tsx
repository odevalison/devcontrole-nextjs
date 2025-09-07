import { Customer } from "@/utils/customer.type";

import { CustomerData } from "./components/customer-data";
import { DeleteCustomerButton } from "./components/delete-customer-button";

export function CardCustomer({ customer }: { customer: Customer }) {
  return (
    <article className="space-y-3 rounded-lg border border-zinc-200 bg-zinc-50 p-4 shadow-md transition *:border-zinc-200 hover:scale-105">
      <CustomerData
        name={customer.name}
        email={customer.email}
        phone={customer.phone}
      />
      <DeleteCustomerButton id={customer.id} />
    </article>
  );
}
