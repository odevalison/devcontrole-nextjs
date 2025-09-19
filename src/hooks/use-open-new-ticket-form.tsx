'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

export const openNewTicketFormSchema = z.object({
  name: z.string().nonempty('O nome do chamado é obrigatório.'),
  description: z.string().nonempty('A descrição do chamado é obrigatória'),
  customerId: z.string().nonempty('Selecione um cliente.'),
})

export type OpenNewTicketFormData = z.infer<typeof openNewTicketFormSchema>

export const useOpenNewTicketForm = () => {
  return useForm<OpenNewTicketFormData>({
    resolver: zodResolver(openNewTicketFormSchema),
    defaultValues: {
      description: '',
      name: '',
    },
  })
}
