'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

const searchCustomerFormSchema = z.object({
  email: z
    .email('Digite um e-mail válido')
    .nonempty('O e-mail do cliente é obrigatório'),
})

export type SearchCustomerFormData = z.infer<typeof searchCustomerFormSchema>

export const useSearchCustomerForm = () => {
  return useForm<SearchCustomerFormData>({
    resolver: zodResolver(searchCustomerFormSchema),
    defaultValues: { email: '' },
  })
}
