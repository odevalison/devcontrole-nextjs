import { z } from 'zod'

export const getCustomerByEmailSchema = z.object({
  email: z.email('E-mail inválido').nonempty('E-mail obrigatório'),
})

export type GetCustomerByEmailData = z.infer<typeof getCustomerByEmailSchema>
