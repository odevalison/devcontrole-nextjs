'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

import { openNewTicket } from '@/app/(public)/actions/open-new-ticket'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Textarea } from '@/components/textarea'

const openTicketFormSchema = z.object({
  name: z.string().nonempty('O nome do chamado é obrigatório'),
  description: z.string().nonempty('A descrição do chamado é obrigatória'),
})

type OpenTicketFormData = z.infer<typeof openTicketFormSchema>

type OpenTicketFormProps = {
  customerId: string
}

export const OpenTicketForm = ({ customerId }: OpenTicketFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<OpenTicketFormData>({
    resolver: zodResolver(openTicketFormSchema),
    defaultValues: { name: '', description: '' },
  })

  const handleOpenTicket = async (data: OpenTicketFormData) => {
    try {
      await openNewTicket({ ...data, customerId })
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
        disabled={isSubmitting}
        className="flex items-center justify-center gap-2"
      >
        {isSubmitting && <Loader2 className="size-4 animate-spin" />}
        Abrir chamado
      </Button>
    </form>
  )
}
