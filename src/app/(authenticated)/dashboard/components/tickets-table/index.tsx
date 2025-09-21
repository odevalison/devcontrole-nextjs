'use client'

import { useQuery } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'

import { getUserOpenTickets } from '@/app/actions/get-user-open-tickets'

import { TicketItem } from '../ticket-item'

export const TicketsTable = () => {
  const { data: tickets, isFetching } = useQuery({
    queryKey: ['customers-tickets'],
    queryFn: getUserOpenTickets,
  })
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
      ) : isFetching ? (
        <p className="flex items-center gap-1 text-sm font-semibold text-zinc-500">
          <Loader2 className="size-4 animate-spin" />
          Carregando chamados...
        </p>
      ) : (
        <p className="text-sm font-semibold text-zinc-500">
          Você não possui nenhum chamado em aberto.
        </p>
      )}
    </>
  )
}
