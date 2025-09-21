'use server'

import prismaClient from '@/lib/prisma'

import { GetCustomerByEmailData, getCustomerByEmailSchema } from './schema'

export const getCustomerByEmail = async (data: GetCustomerByEmailData) => {
  getCustomerByEmailSchema.parse(data)
  const searchedCustomer = await prismaClient.customer.findFirst({
    where: { email: data.email },
  })
  const customerNotFound = !searchedCustomer
  if (customerNotFound) {
    throw new Error('Cliente não encontrado')
  }
  return searchedCustomer
}
