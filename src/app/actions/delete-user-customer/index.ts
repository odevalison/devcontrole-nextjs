'use server'

import { revalidatePath } from 'next/cache'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/lib/auth'
import prismaClient from '@/lib/prisma'

import { DeleteUserCustomerData, deleteUserCustomerSchema } from './schema'

export const deleteUserCustomer = async (data: DeleteUserCustomerData) => {
  deleteUserCustomerSchema.parse(data)
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    throw new Error('Usuário não autenticado')
  }
  const customerToDelete = await prismaClient.customer.findFirst({
    where: { id: data.id, userId: session.user.id },
    include: { tickets: true },
  })
  if (!customerToDelete) {
    throw new Error('Cliente não encontrado')
  }
  const customerHaveOpenTickets = !!customerToDelete.tickets.filter(
    (ticket) => ticket.status === 'OPEN',
  ).length
  if (customerHaveOpenTickets) {
    throw new Error('Cliente possui chamados em aberto')
  }
  await prismaClient.customer.delete({
    where: { id: customerToDelete.id, userId: session.user.id },
    include: { tickets: true },
  })
  revalidatePath('/dashboard/customers')
}
