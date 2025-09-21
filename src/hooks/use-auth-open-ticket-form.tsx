'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

export const openTicketFormSchema = z.object({
  name: z.string().nonempty('O nome do chamado é obrigatório.'),
  description: z.string().nonempty('A descrição do chamado é obrigatória'),
  customerId: z.string().nonempty('Selecione um cliente.'),
})

export type OpenTicketFormData = z.infer<typeof openTicketFormSchema>

export const useAuthOpenTicketForm = () => {
  return useForm<OpenTicketFormData>({
    resolver: zodResolver(openTicketFormSchema),
    defaultValues: { description: '', name: '' },
  })
}
