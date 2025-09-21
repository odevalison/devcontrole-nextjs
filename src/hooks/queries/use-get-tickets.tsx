'use client'

import { useQuery } from '@tanstack/react-query'

import { getUserOpenTickets } from '@/app/actions/get-user-open-tickets'

export const getTicketsKey = ['tickets'] as const

export const useGetTickets = () => {
  return useQuery({
    queryKey: getTicketsKey,
    queryFn: getUserOpenTickets,
  })
}
