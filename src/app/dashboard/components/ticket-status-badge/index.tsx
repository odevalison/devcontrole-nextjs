export function TicketStatusBadge({ ticketStatus }: { ticketStatus: string }) {
  return (
    <div className="w-fit rounded-lg bg-green-500 px-3 py-1 text-sm font-semibold text-white drop-shadow select-none">
      {ticketStatus}
    </div>
  );
}
