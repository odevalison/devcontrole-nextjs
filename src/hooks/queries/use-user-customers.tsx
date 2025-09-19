'use client'

import { useQuery } from '@tanstack/react-query'

import { getUserCustomers } from '@/app/actions/get-user-customers'

export const useUserCustomers = () => {
  return useQuery({
    queryKey: ['get-user-customers'],
    queryFn: getUserCustomers,
  })
}
