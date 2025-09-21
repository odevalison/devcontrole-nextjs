'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { deleteUserCustomer } from '@/app/actions/delete-user-customer'

import { getUserCustomersKey } from '../queries/use-get-user-customers'

export const deleteCustomerKey = ['delete-customer'] as const

export const useDeleteCustomer = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: deleteCustomerKey,
    mutationFn: deleteUserCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getUserCustomersKey })
    },
  })
}
