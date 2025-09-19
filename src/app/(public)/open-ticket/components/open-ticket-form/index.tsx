/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { Button } from '@/components/button'
import { Input } from '@/components/input'

const openTicketFormSchema = z.object({
  email: z.string().nonempty('O e-mail do cliente é obrigatório'),
})

type OpenTicketFormData = z.infer<typeof openTicketFormSchema>

type SelectedCustomerData = {
  id: string
  name: string
}

export const OpenTicketForm = () => {
  const [isCustomerSelected, setIsCustomerSelected] =
    useState<SelectedCustomerData | null>({ id: '1', name: 'teste' })
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<OpenTicketFormData>({
    resolver: zodResolver(openTicketFormSchema),
    defaultValues: { email: '' },
  })

  const handleOpenTicket = (data: OpenTicketFormData) => {
    alert(data.email)
  }

  return (
    <>
      {isCustomerSelected ? (
        <div></div>
      ) : (
        <form
          className="flex flex-col gap-2 rounded-lg bg-zinc-100 p-4 shadow"
          onSubmit={handleSubmit(handleOpenTicket)}
        >
          <Input
            {...register('email')}
            error={errors.email?.message}
            placeholder="Digite o e-mail do cliente"
          />
          <Button
            type="submit"
            className="flex items-center justify-center gap-2"
          >
            <Search className="size-4" /> Buscar cliente
          </Button>
        </form>
      )}
    </>
  )
}
