'use client'

import { useMutation } from '@tanstack/react-query'

import { closeUserTicket } from '@/app/actions/close-user-ticket'

export const useCloseTicket = () => {
  return useMutation({
    mutationKey: ['close-ticket'],
    mutationFn: closeUserTicket,
  })
}
