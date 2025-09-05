import { Customer } from "@/utils/customer.type";

import { CardCustomerData } from "./components/card-customer-data";
import { CardCustomerDeleteButton } from "./components/card-customer-delete-button";

export function CardCustomer({ customer }: { customer: Customer }) {
  return (
    <article className="space-y-3 rounded-lg border border-zinc-200 bg-zinc-50 p-4 shadow-md transition *:border-zinc-200 hover:scale-105">
      <CardCustomerData
        name={customer.name}
        email={customer.email}
        phone={customer.phone}
      />
      <CardCustomerDeleteButton id={customer.id} />
    </article>
  );
}
