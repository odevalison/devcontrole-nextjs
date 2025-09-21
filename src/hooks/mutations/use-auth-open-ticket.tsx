'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { openNewTicket } from '@/app/actions/open-new-ticket'

import { getTicketsKey } from '../queries/use-get-tickets'

export const authOpenTicketKey = ['auth-open-ticket'] as const

export const useAuthOpenTicket = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: authOpenTicketKey,
    mutationFn: openNewTicket,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getTicketsKey })
    },
  })
}
