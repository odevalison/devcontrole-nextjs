'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { openNewTicket } from '@/app/(public)/actions/open-new-ticket'

import { getTicketsKey } from '../queries/use-get-tickets'

export const useOpenTicketKey = ['open-ticket'] as const

export const useOpenTicket = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: useOpenTicketKey,
    mutationFn: openNewTicket,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getTicketsKey })
    },
  })
}
