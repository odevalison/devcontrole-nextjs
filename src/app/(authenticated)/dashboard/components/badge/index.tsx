import { Ticket, TicketStatus } from '@/utils/ticket.type'

type BadgeProps = {
  status: Ticket['status']
}

export const Badge = ({ status }: BadgeProps) => {
  return (
    <div
      className={`w-fit rounded-lg px-2 py-1 text-sm font-semibold text-white drop-shadow select-none ${status === 'OPEN' ? 'bg-emerald-400' : 'bg-rose-500'}`}
    >
      {TicketStatus[status]}
    </div>
  )
}
