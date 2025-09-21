'use client'

import { useMutation } from '@tanstack/react-query'

import { deleteUserCustomer } from '@/app/actions/delete-user-customer'

export const deleteCustomerKey = ['delete-customer'] as const

export const useDeleteCustomer = () => {
  return useMutation({
    mutationKey: deleteCustomerKey,
    mutationFn: deleteUserCustomer,
  })
}
