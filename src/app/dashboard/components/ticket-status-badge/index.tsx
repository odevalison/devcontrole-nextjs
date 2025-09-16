export function TicketStatusBadge({ ticketStatus }: { ticketStatus: string }) {
  return (
    <div
      className={`w-fit rounded-lg px-3 py-1 text-sm font-semibold text-white drop-shadow select-none ${ticketStatus === "Aberto" ? "bg-emerald-600" : "bg-red-600"}`}
    >
      {ticketStatus}
    </div>
  );
}
