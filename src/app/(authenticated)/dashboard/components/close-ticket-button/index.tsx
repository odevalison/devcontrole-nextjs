'use client'

import { CheckCircle, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/button'
import { useCloseTicket } from '@/hooks/mutations/use-close-ticket'

type CloseTicketButtonProps = {
  ticketId: string
}

export const CloseTicketButton = ({ ticketId }: CloseTicketButtonProps) => {
  const { mutateAsync, isPending } = useCloseTicket()

  const handleCloseTicket = async () => {
    try {
      await mutateAsync({ id: ticketId })
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    }
  }

  return (
    <Button
      size="icon"
      color="ghost"
      onClick={handleCloseTicket}
      disabled={isPending}
    >
      {isPending ? (
        <Loader2 className="size-2 animate-spin" />
      ) : (
        <CheckCircle className="size-2 text-emerald-500" />
      )}
    </Button>
  )
}
