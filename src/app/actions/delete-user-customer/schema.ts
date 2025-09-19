import { z } from 'zod'

export const deleteUserCustomerSchema = z.object({
  id: z.string().nonempty('ID do cliente obrigatório'),
})

export type DeleteUserCustomerData = z.infer<typeof deleteUserCustomerSchema>
