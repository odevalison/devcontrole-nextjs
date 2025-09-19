import z from 'zod'

export const openNewTicketShema = z.object({
  name: z.string().nonempty('O nome do chamado é obrigatório.'),
  description: z.string().nonempty('A descrição do chamado é obrigatória'),
  customerId: z.string().nonempty('Selecione um cliente.'),
})

export type OpenNewTicketSchemaData = z.infer<typeof openNewTicketShema>
