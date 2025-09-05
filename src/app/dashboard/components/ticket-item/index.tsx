import { ExternalLinkIcon, TrashIcon } from "lucide-react";

import { Button } from "../button";
import { TicketStatusBadge } from "../ticket-status-badge";

export function TicketItem() {
  return (
    <>
      <tr className="w-full border-b border-zinc-200 bg-zinc-50 text-sm transition *:py-4 *:select-none last:border-b-0 hover:bg-zinc-100">
        <td className="pl-4">Mercado Livre</td>
        <td className="hidden sm:table-cell">09/09/2025</td>
        <td>
          <TicketStatusBadge ticketStatus="Em aberto" />
        </td>
        <td className="float-right space-x-1 pr-4">
          <Button size="icon" variant="danger">
            <TrashIcon />
          </Button>
          <Button size="icon" variant="secondary">
            <ExternalLinkIcon />
          </Button>
        </td>
      </tr>
    </>
  );
}
