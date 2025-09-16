export enum TicketStatus {
  OPEN = "Aberto",
  CLOSED = "Fechado",
}

export type Ticket = {
  id: string;
  name: string;
  description: string;
  status: keyof typeof TicketStatus;
  created_at: Date | null;
  updated_at: Date | null;
  userId: string | null;
  customerId: string | null;
} & {
  customer: {
    id: string;
    name: string;
    created_at: Date | null;
    updated_at: Date | null;
    userId: string | null;
    address: string | null;
    phone: string;
    email: string;
  } | null;
};
