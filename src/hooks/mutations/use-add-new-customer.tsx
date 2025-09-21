'use client'

import { useMutation } from '@tanstack/react-query'

import { addNewCustomer } from '@/app/actions/add-new-customer'

export const newCustomerKey = ['new-customer'] as const

export const useAddNewCustomer = () => {
  return useMutation({
    mutationKey: newCustomerKey,
    mutationFn: addNewCustomer,
  })
}
