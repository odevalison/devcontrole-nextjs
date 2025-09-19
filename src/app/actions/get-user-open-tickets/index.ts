'use server'

import { getServerSession } from 'next-auth'

import { authOptions } from '@/lib/auth'
import prismaClient from '@/lib/prisma'
import { Ticket } from '@/utils/ticket.type'

export const getUserOpenTickets = async () => {
  const session = await getServerSession(authOptions)
  if (!session || !session?.user) {
    throw new Error('Usuário não autenticado')
  }
  const userOpenTickets = await prismaClient.ticket.findMany({
    where: { userId: session.user.id, status: 'OPEN' },
    orderBy: { created_at: 'desc' },
    include: { customer: true },
  })
  const userDontHaveOpenTickets = !userOpenTickets
  if (userDontHaveOpenTickets) {
    return null
  }
  return userOpenTickets as Ticket[]
}
