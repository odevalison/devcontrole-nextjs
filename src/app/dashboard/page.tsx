import Link from "next/link";

import { Button } from "./components/button";
import { TicketItem } from "./components/ticket-item";

export default async function DashboardPage() {
  return (
    <main className="space-y-6.5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Chamados</h1>
        <Button>
          <Link href="/dashboard/new">Abrir chamado</Link>
        </Button>
      </div>

      <table className="min-w-full">
        <thead>
          <tr className="*:py-3 *:select-none">
            <th className="pl-4 text-left text-sm font-semibold">Cliente</th>
            <th className="hidden text-left text-sm font-semibold sm:table-cell">
              Data de cadastro
            </th>
            <th className="text-left text-sm font-semibold">Status</th>
            <th className="pr-4 text-right text-sm font-semibold">Ações</th>
          </tr>
        </thead>

        <tbody>
          <TicketItem />
        </tbody>
      </table>
    </main>
  );
}
