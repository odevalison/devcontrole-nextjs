'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Textarea } from '@/components/textarea'

const ticketFormSchema = z.object({
  name: z.string().nonempty('O nome do chamado é obrigatório'),
  description: z.string().nonempty('A descrição do chamado é obrigatória'),
})

type TicketFormData = z.infer<typeof ticketFormSchema>

export const TicketForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm<TicketFormData>({
    resolver: zodResolver(ticketFormSchema),
    defaultValues: { name: '', description: '' },
  })
  return (
    <form className="flex flex-col gap-2 rounded-lg border border-zinc-200 p-5 shadow">
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
      <Button type="submit">Abrir chamado</Button>
    </form>
  )
}
