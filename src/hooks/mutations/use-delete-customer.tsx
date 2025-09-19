'use client'

import { useMutation } from '@tanstack/react-query'

import { deleteUserCustomer } from '@/app/actions/delete-user-customer'

export const useDeleteCustomer = (id: string) => {
  return useMutation({
    mutationKey: ['delete-customer'],
    mutationFn: () => {
      return deleteUserCustomer({ id })
    },
  })
}
