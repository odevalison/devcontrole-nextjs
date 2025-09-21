'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Search, X } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

import { getCustomerByEmail } from '@/app/actions/get-customer-by-email'
import { Button } from '@/components/button'
import { Input } from '@/components/input'

import { OpenTicketForm } from '../open-ticket-form'

const SearchCustomerFormSchema = z.object({
  email: z
    .email('Digite um e-mail válido')
    .nonempty('O e-mail do cliente é obrigatório'),
})

type SearchCustomerFormData = z.infer<typeof SearchCustomerFormSchema>

type CustomerSelectedData = {
  id: string
  name: string
}

export const SearchCustomerForm = () => {
  const [customerSelected, setCustomerSelected] =
    useState<CustomerSelectedData | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    setFocus,
    formState: { errors },
  } = useForm<SearchCustomerFormData>({
    resolver: zodResolver(SearchCustomerFormSchema),
    defaultValues: { email: '' },
  })

  const handleSearchCustomer = async (data: SearchCustomerFormData) => {
    try {
      const customer = await getCustomerByEmail(data)
      setCustomerSelected({ id: customer.id, name: customer.name })
    } catch (err) {
      if (err instanceof Error) {
        setError('email', { type: 'custom', message: err.message })
        setValue('email', '')
        setFocus('email')
        toast.error(err.message)
      }
    }
  }

  const handleClearCustomerSelected = () => {
    setCustomerSelected(null)
    setValue('email', '')
  }

  return (
    <>
      {customerSelected != null ? (
        <>
          <div className="flex items-center justify-between gap-2 rounded-lg border border-zinc-200 p-5 shadow">
            <div className="flex items-center gap-2">
              <strong className="text-sm">Cliente selecionado:</strong>
              <p className="text-sm">{customerSelected.name}</p>
            </div>
            <Button
              color="danger"
              size="icon"
              onClick={handleClearCustomerSelected}
            >
              <X className="text-white" />
            </Button>
          </div>

          <OpenTicketForm />
        </>
      ) : (
        <form
          className="flex flex-col gap-2 rounded-lg border border-zinc-200 p-5 shadow"
          onSubmit={handleSubmit(handleSearchCustomer)}
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
