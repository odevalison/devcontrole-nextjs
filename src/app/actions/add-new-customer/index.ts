'use server'

import { getServerSession } from 'next-auth'

import { authOptions } from '@/lib/auth'
import prismaClient from '@/lib/prisma'

import { AddNewCustomerFormData, addNewCustomerFormSchema } from './schema'

export const addNewCustomer = async (data: AddNewCustomerFormData) => {
  addNewCustomerFormSchema.parse(data)
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    throw new Error('Usuário não autenticado')
  }
  try {
    await prismaClient.customer.create({
      data: { ...data, userId: session.user.id },
    })
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message)
    }
    throw new Error('Erro ao adicionar cliente')
  }
}
