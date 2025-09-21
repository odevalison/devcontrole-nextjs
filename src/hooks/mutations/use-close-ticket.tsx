'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { closeUserTicket } from '@/app/actions/close-user-ticket'

export const useCloseTicket = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['close-ticket'],
    mutationFn: closeUserTicket,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customers-tickets'] })
    },
  })
}
