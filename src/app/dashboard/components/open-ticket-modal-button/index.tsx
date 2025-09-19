'use client'

import { ExternalLinkIcon } from 'lucide-react'

import { Button } from '@/components/button'
import { useModal } from '@/providers/modal'
import { Ticket } from '@/utils/ticket.type'

import { TicketModal } from '../ticket-modal'

type OpenTicketModalButtoProps = {
  ticket: Ticket
}

export const OpenTicketModalButton = ({
  ticket,
}: OpenTicketModalButtoProps) => {
  const { openModal, passTicketInfos } = useModal()

  const onModalWillOpen = () => {
    passTicketInfos(ticket)
    openModal()
  }

  return (
    <>
      <Button size="icon" color="ghost" onClick={onModalWillOpen}>
        <ExternalLinkIcon className="size-2" />
      </Button>
      <TicketModal />
    </>
  )
}
