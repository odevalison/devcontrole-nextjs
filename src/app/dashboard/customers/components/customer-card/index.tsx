import { Button } from "@/app/dashboard/components/button";
import { Customer } from "@/utils/customer.type";

export function CustomerCard({ customer }: { customer: Customer }) {
  return (
    <>
      <article className="space-y-3 rounded-lg border border-zinc-200 bg-zinc-50 p-4 shadow-md transition *:border-zinc-200 hover:scale-105">
        <div className="flex items-center justify-between text-sm">
          <strong className="truncate text-ellipsis">Nome:</strong>
          <p className="truncate text-ellipsis">{customer.name}</p>
        </div>
        <div className="flex items-center justify-between text-sm">
          <strong className="truncate text-ellipsis">E-mail:</strong>
          <p className="truncate text-ellipsis">{customer.email}</p>
        </div>
        <div className="flex items-center justify-between text-sm">
          <strong className="truncate text-ellipsis">Número:</strong>
          <p>{customer.phone}</p>
        </div>
        <Button variant="danger" className="w-full">
          Deletar
        </Button>
      </article>
    </>
  );
}
