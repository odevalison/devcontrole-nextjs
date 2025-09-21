'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Textarea } from '@/components/textarea'

const openTicketFormSchema = z.object({
  name: z.string().nonempty('O nome do chamado é obrigatório'),
  description: z.string().nonempty('A descrição do chamado é obrigatória'),
})

type OpenTicketFormData = z.infer<typeof openTicketFormSchema>

export const OpenTicketForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm<OpenTicketFormData>({
    resolver: zodResolver(openTicketFormSchema),
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
