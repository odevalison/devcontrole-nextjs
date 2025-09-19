'use client'

import { useMutation } from '@tanstack/react-query'

import { addNewCustomer } from '@/app/actions/add-new-customer'

export const useAddNewCustomer = () => {
  return useMutation({
    mutationKey: ['add-new-customer'],
    mutationFn: addNewCustomer,
  })
}
