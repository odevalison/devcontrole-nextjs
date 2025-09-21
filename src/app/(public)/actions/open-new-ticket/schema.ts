import z from 'zod'

export const openNewTicketSchema = z.object({
  customerId: z.string().nonempty('O ID do cliente é obrigatório'),
  name: z.string().nonempty('O nome do chamado é obrigatório'),
  description: z.string().nonempty('A descrição do chamado é obrigatório'),
})

export type OpenNewTicketData = z.infer<typeof openNewTicketSchema>
