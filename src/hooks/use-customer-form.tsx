'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { phoneRefine } from '@/utils/phone-refine'

const newCustomerFormSchema = z.object({
  name: z.string().nonempty('O campo nome é obrigatório'),
  phone: z
    .string()
    .nonempty('O campo telefone é obrigatório')
    .refine((fieldValue) => phoneRefine(fieldValue), {
      error: 'Informe um telefone válido',
    })
    .transform((field) => field.replace(/[^\w]/g, '')),
  email: z
    .email('Informe um e-mail válido')
    .nonempty('O campo e-mail é obrigatório'),
  address: z.string().optional(),
})

export type NewCustomerFormData = z.infer<typeof newCustomerFormSchema>

export const useCustomerForm = () => {
  return useForm<NewCustomerFormData>({
    resolver: zodResolver(newCustomerFormSchema),
    defaultValues: { email: '', name: '', phone: '', address: '' },
  })
}
