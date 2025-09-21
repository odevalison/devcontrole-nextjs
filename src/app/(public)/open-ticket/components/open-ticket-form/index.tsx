'use client'

import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Textarea } from '@/components/textarea'
import { useOpenTicket } from '@/hooks/mutations/use-open-ticket'
import {
  OpenTicketFormData,
  useOpenTicketForm,
} from '@/hooks/use-open-ticket-form'

type OpenTicketFormProps = {
  customerId: string
}

export const OpenTicketForm = ({ customerId }: OpenTicketFormProps) => {
  const openTicketMutation = useOpenTicket()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useOpenTicketForm()

  const handleOpenTicket = async (data: OpenTicketFormData) => {
    try {
      await openTicketMutation.mutateAsync({ ...data, customerId })
      toast.success('Chamado aberto com sucesso!')
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    } finally {
      reset()
    }
  }

  return (
    <form
      className="flex flex-col gap-2 rounded-lg border border-zinc-200 p-5 shadow"
      onSubmit={handleSubmit(handleOpenTicket)}
    >
      <Input
        {...register('name')}
        error={errors.name?.message}
        placeholder="Digite o nome do chamado"
        label="Nome do chamado"
      />
      <Textarea
        {...register('description')}
        error={errors.description?.message}
        placeholder="Descreva seu problema"
        label="Descreva o problema"
      />
      <Button
        type="submit"
        disabled={openTicketMutation.isPending}
        className="flex items-center justify-center gap-2"
      >
        {openTicketMutation.isPending && (
          <Loader2 className="size-4 animate-spin" />
        )}
        Abrir chamado
      </Button>
    </form>
  )
}
