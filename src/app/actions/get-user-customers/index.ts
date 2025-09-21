'use server'

import { getServerSession } from 'next-auth'

import { authOptions } from '@/lib/auth'
import prismaClient from '@/lib/prisma'
import { Customer } from '@/utils/customer.type'

export const getUserCustomers = async () => {
  const session = await getServerSession(authOptions)
  if (!session || !session?.user) {
    throw new Error('Usuário não autenticado')
  }
  const userCustomers = await prismaClient.customer.findMany({
    where: { userId: session.user.id },
    orderBy: { created_at: 'desc' },
  })
  const userDontHaveCustomers = !userCustomers.length
  if (userDontHaveCustomers) {
    return null
  }
  return userCustomers as Customer[]
}
