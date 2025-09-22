'use client'

import { Loader2, Search, X } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import { getCustomerByEmail } from '@/app/(public)/actions/get-customer-by-email'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import {
  SearchCustomerFormData,
  useSearchCustomerForm,
} from '@/hooks/use-search-customer-form'

import { OpenTicketForm } from '../open-ticket-form'

type CustomerSelectedData = {
  id: string
  name: string
} | null

export const SearchCustomerForm = () => {
  const [customerSelected, setCustomerSelected] =
    useState<CustomerSelectedData>(null)

  const {
    register,
    handleSubmit,
    resetField,
    setError,
    setFocus,
    formState: { errors, isSubmitting },
  } = useSearchCustomerForm()

  const handleSearchCustomer = async (data: SearchCustomerFormData) => {
    try {
      const customer = await getCustomerByEmail(data)
      setCustomerSelected({ id: customer.id, name: customer.name })
    } catch (err) {
      if (err instanceof Error) {
        setError('email', { type: 'custom', message: err.message })
        resetField('email', { keepError: true })
        setFocus('email')
        toast.error(err.message)
      }
    }
  }

  const handleClearCustomerSelected = () => {
    setCustomerSelected(null)
    resetField('email')
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

          <OpenTicketForm customerId={customerSelected.id} />
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
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Search className="size-4" />
            )}
            Buscar cliente
          </Button>
        </form>
      )}
    </>
  )
}
