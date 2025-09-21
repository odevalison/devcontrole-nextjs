'use server'

import prismaClient from '@/lib/prisma'

import { OpenNewTicketData, openNewTicketSchema } from './schema'

export const openNewTicket = async (data: OpenNewTicketData) => {
  openNewTicketSchema.parse(data)
  try {
    await prismaClient.ticket.create({
      data: {
        ...data,
        customerId: data.customerId,
        status: 'OPEN',
      },
    })
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message)
    }
    throw new Error('Erro ao abrir chamado, por favor, tente novamente')
  }
}
