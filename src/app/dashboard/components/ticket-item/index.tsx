import { dateFormat } from '@/utils/date-format'
import { Ticket } from '@/utils/ticket.type'

import { Badge } from '../badge'
import { CloseTicketButton } from '../close-ticket-button'
import { OpenTicketModalButton } from '../open-ticket-modal-button'

type TicketItemProps = {
  ticket: Ticket
}

export const TicketItem = ({ ticket }: TicketItemProps) => {
  return (
    <tr className="w-full border-b border-zinc-200 bg-zinc-50 text-sm transition *:py-4 last:border-b-0 hover:bg-zinc-100">
      <td className="pl-3 text-sm">{ticket?.customer?.name}</td>
      <td className="text-sm">{dateFormat(ticket.created_at as Date)}</td>
      <td>
        <Badge status={ticket.status} />
      </td>
      <td className="float-right space-x-1 pr-3">
        <CloseTicketButton ticketId={ticket.id} />
        <OpenTicketModalButton ticket={ticket} />
      </td>
    </tr>
  )
}
