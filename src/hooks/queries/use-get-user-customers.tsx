'use client'

import { useQuery } from '@tanstack/react-query'

import { getUserCustomers } from '@/app/actions/get-user-customers'

export const getUserCustomersKey = ['get-user-customers'] as const

export const useGetUserCustomers = () => {
  return useQuery({
    queryKey: getUserCustomersKey,
    queryFn: getUserCustomers,
  })
}
