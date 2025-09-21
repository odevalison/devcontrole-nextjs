'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Search, X } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { Button } from '@/components/button'
import { Input } from '@/components/input'

import { TicketForm } from '../ticket-form'

const openTicketFormSchema = z.object({
  email: z
    .email('Digite um e-mail válido')
    .nonempty('O e-mail do cliente é obrigatório'),
})

type OpenTicketFormData = z.infer<typeof openTicketFormSchema>

type SelectedCustomerData = {
  id: string
  name: string
}

export const OpenTicketForm = () => {
  const [selectedCustomer, setSelectedCustomer] =
    useState<SelectedCustomerData | null>({ id: '01', name: 'Alison Gabriel' })
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<OpenTicketFormData>({
    resolver: zodResolver(openTicketFormSchema),
    defaultValues: { email: '' },
  })

  const handleOpenTicket = (data: OpenTicketFormData) => {
    alert(data.email)
  }

  const handleClearSelectedCustomer = () => {
    setSelectedCustomer(null)
    setValue('email', '')
  }

  return (
    <>
      {selectedCustomer != null ? (
        <>
          <div className="flex items-center justify-between gap-2 rounded-lg border border-zinc-200 p-5 shadow">
            <div className="flex items-center gap-2">
              <strong className="text-sm">Cliente selecionado:</strong>
              <p className="text-sm">{selectedCustomer.name}</p>
            </div>
            <Button
              color="danger"
              size="icon"
              onClick={handleClearSelectedCustomer}
            >
              <X className="text-white" />
            </Button>
          </div>
          <TicketForm />
        </>
      ) : (
        <form
          className="flex flex-col gap-2 rounded-lg border border-zinc-200 p-5 shadow"
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
