'use client'

import { useMutation } from '@tanstack/react-query'

import { openNewTicket } from '@/app/actions/open-new-ticket'
import { OpenNewTicketSchemaData } from '@/app/actions/open-new-ticket/schema'

export const useOpenNewTicket = () => {
  return useMutation({
    mutationKey: ['open-new-ticket'],
    mutationFn: (data: OpenNewTicketSchemaData) => {
      return openNewTicket(data)
    },
  })
}
