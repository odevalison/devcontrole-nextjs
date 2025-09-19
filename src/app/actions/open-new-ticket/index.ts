'use server'

import { revalidatePath } from 'next/cache'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/lib/auth'
import prismaClient from '@/lib/prisma'

import { OpenNewTicketSchemaData, openNewTicketShema } from './schema'

export const openNewTicket = async (data: OpenNewTicketSchemaData) => {
  openNewTicketShema.parse(data)
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    throw new Error('Usuário não autenticado')
  }
  try {
    await prismaClient.ticket.create({
      data: {
        ...data,
        userId: session.user.id,
        status: 'OPEN',
      },
    })
    revalidatePath('/dashboard')
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message)
    }
    throw new Error('Erro ao abrir chamado')
  }
}
