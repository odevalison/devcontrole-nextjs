import { z } from 'zod'

export const closeUserTicketSchema = z.object({
  id: z.string().nonempty('ID do chamado obrigatório'),
})

export type CloseUserTicketData = z.infer<typeof closeUserTicketSchema>
