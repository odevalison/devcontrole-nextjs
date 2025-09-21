'use server'

import { getServerSession } from 'next-auth'

import { authOptions } from '@/lib/auth'
import prismaClient from '@/lib/prisma'

import { CloseUserTicketData, closeUserTicketSchema } from './schema'

export const closeUserTicket = async (data: CloseUserTicketData) => {
  closeUserTicketSchema.parse(data)
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    throw new Error('Usuário não autenticado')
  }
  const ticketToClose = await prismaClient.ticket.findFirst({
    where: { id: data.id, customer: { userId: session.user.id } },
  })
  const ticketNotFound = !ticketToClose
  if (ticketNotFound) {
    throw new Error('Chamado não encontrado')
  }
  try {
    await prismaClient.ticket.delete({
      where: { id: ticketToClose.id, customer: { userId: session.user.id } },
      include: { customer: false, user: false },
    })
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message)
    }
    throw new Error('Erro ao fechar chamado')
  }
}
