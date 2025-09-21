'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { addNewCustomer } from '@/app/actions/add-new-customer'

import { getUserCustomersKey } from '../queries/use-get-user-customers'

export const newCustomerKey = ['new-customer'] as const

export const useAddNewCustomer = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: newCustomerKey,
    mutationFn: addNewCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getUserCustomersKey })
    },
  })
}
