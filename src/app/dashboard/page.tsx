import Link from "next/link";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import prismaClient from "@/lib/prisma";
import { Ticket } from "@/utils/ticket.type";

import { Button } from "./components/button";
import { TicketItem } from "./components/ticket-item";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  const tickets = (await prismaClient.ticket.findMany({
    where: { AND: { userId: session?.user.id as string, status: "OPEN" } },
    orderBy: { created_at: "desc" },
    include: { customer: true },
  })) as Ticket[];
  const hasOpenTickets = !!tickets.length;

  return (
    <main className="space-y-6.5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Chamados</h1>
        <Button>
          <Link href="/dashboard/new">Abrir chamado</Link>
        </Button>
      </div>

      {hasOpenTickets ? (
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
            {tickets.map((ticket) => (
              <TicketItem
                key={ticket.id}
                id={ticket.id}
                name={ticket.name}
                date={ticket.created_at}
                customer={ticket.customer}
                status={ticket.status}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-sm font-semibold text-zinc-500">
          Você não possui nenhum chamado em aberto.
        </p>
      )}
    </main>
  );
};

export default DashboardPage;
