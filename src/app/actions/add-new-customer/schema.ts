import z from 'zod'

import { phoneRefine } from '@/utils/phone-refine'

export const addNewCustomerFormSchema = z.object({
  name: z.string().nonempty('Nome obrigatório'),
  phone: z
    .string()
    .nonempty('Telefone obrigatório')
    .refine((field) => phoneRefine(field), { error: 'Telefone inválido' })
    .transform((field) => field.replace(/[^\w]/g, '')),
  email: z.email('E-mail inválido').nonempty('E-mail obrigatório'),
  address: z.string().optional(),
})

export type AddNewCustomerFormData = z.infer<typeof addNewCustomerFormSchema>
