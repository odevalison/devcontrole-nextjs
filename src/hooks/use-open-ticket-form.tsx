'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

const openTicketFormSchema = z.object({
  name: z.string().nonempty('O nome do chamado é obrigatório'),
  description: z.string().nonempty('A descrição do chamado é obrigatória'),
})

export type OpenTicketFormData = z.infer<typeof openTicketFormSchema>

export const useOpenTicketForm = () => {
  return useForm<OpenTicketFormData>({
    resolver: zodResolver(openTicketFormSchema),
    defaultValues: { name: '', description: '' },
  })
}
