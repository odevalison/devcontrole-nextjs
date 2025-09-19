import { getUserOpenTickets } from '@/app/actions/get-user-open-tickets'

import { TicketItem } from '../ticket-item'

export const TicketsTable = async () => {
  const tickets = await getUserOpenTickets()
  const haveOpenTickets = !!tickets?.length

  return (
    <>
      {haveOpenTickets ? (
        <table className="min-w-full">
          <thead>
            <tr className="*:py-3 *:text-sm *:font-semibold">
              <th className="pl-3 text-left">Cliente</th>
              <th className="text-left">Data cadastro</th>
              <th className="text-left">Status</th>
              <th className="pr-3 text-right">Ações</th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((ticket) => (
              <TicketItem key={ticket.id} ticket={ticket} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-sm font-semibold text-zinc-500">
          Você não possui nenhum chamado em aberto.
        </p>
      )}
    </>
  )
}
