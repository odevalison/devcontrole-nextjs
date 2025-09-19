'use client'

import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/button'
import { useDeleteCustomer } from '@/hooks/mutations/use-delete-customer'

type DeleteButtonProps = {
  id: string
}

export const DeleteButton = ({ id }: DeleteButtonProps) => {
  const { mutateAsync, isPending } = useDeleteCustomer(id)

  const handleDeleteCustomer = async () => {
    try {
      await mutateAsync()
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    }
  }

  return (
    <Button
      disabled={isPending}
      color="danger"
      onClick={handleDeleteCustomer}
      className="flex w-full items-center justify-center gap-1"
    >
      {isPending && <Loader2 className="size-3.5 animate-spin" />}
      Deletar
    </Button>
  )
}
