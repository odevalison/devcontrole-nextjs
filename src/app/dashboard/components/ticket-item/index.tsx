"use client";

import { CheckCircle, ExternalLinkIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { api } from "@/lib/api";
import { Ticket, TicketStatus } from "@/utils/ticket.type";

import { Button } from "../button";
import { TicketStatusBadge } from "../ticket-status-badge";

interface TicketItemProps {
  status: keyof typeof TicketStatus;
  name: Ticket["name"];
  id: Ticket["id"];
  date: Ticket["created_at"];
  customer: Ticket["customer"];
}

export const TicketItem = ({ date, name, status, id }: TicketItemProps) => {
  const { refresh } = useRouter();

  const onChangeTicketStatus = async () => {
    try {
      const response = await api.patch("/api/ticket", { id });
      if (response.status === 200) {
        refresh();
      }
    } catch (err) {
      if (err instanceof Error) {
        throw Error(err.message);
      }
      throw new Error(err as string);
    }
  };

  return (
    <>
      <tr className="w-full border-b border-zinc-200 bg-zinc-50 text-sm transition *:py-4 *:select-none last:border-b-0 hover:bg-zinc-100">
        <td className="pl-4">{name}</td>

        <td className="hidden sm:table-cell">
          {date?.toLocaleDateString("pt-BR")}
        </td>

        <td>
          <TicketStatusBadge ticketStatus={TicketStatus[status]} />
        </td>

        <td className="float-right space-x-1 pr-4">
          <Button size="icon" variant="success" onClick={onChangeTicketStatus}>
            <CheckCircle />
          </Button>

          <Button size="icon" variant="secondary">
            <ExternalLinkIcon />
          </Button>
        </td>
      </tr>
    </>
  );
};
