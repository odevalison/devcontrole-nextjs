'use client'

import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { Textarea } from '@/components/textarea'
import { useAuthOpenTicket } from '@/hooks/mutations/use-auth-open-ticket'
import { useGetUserCustomers } from '@/hooks/queries/use-get-user-customers'
import {
  OpenTicketFormData,
  useAuthOpenTicketForm,
} from '@/hooks/use-auth-open-ticket-form'

export const NewTicketForm = () => {
  const router = useRouter()
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useAuthOpenTicketForm()
  const { data: customers } = useGetUserCustomers()
  const openNewTicketMutation = useAuthOpenTicket()
  const haveAvailableCustomers = !!customers?.length

  const handleOpenNewTicket = async (data: OpenTicketFormData) => {
    try {
      await openNewTicketMutation.mutateAsync(data)
      router.push('/dashboard')
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    }
  }

  return (
    <form
      className="mt-5 flex flex-col gap-4"
      onSubmit={handleSubmit(handleOpenNewTicket)}
    >
      <Input
        {...register('name')}
        error={errors.name?.message}
        label="Nome do chamado"
        disabled={!haveAvailableCustomers || isSubmitting}
        placeholder="Digite o nome do chamado"
      />
      <Textarea
        {...register('description')}
        error={errors.description?.message}
        rows={4}
        label="Descreva o problema"
        disabled={!haveAvailableCustomers || isSubmitting}
        placeholder="Digite uma breve descrição"
      />

      {haveAvailableCustomers && (
        <Select
          {...register('customerId')}
          disabled={isSubmitting}
          error={errors.customerId?.message}
          label="Selecione o cliente"
        >
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </Select>
      )}

      {!haveAvailableCustomers && (
        <p className="flex items-center gap-2 text-sm font-medium text-zinc-500">
          Nenhum cliente cadastrado.
          <Link
            href="/dashboard/customers"
            className="text-blue-500 hover:underline"
          >
            Cadastre um novo cliente
          </Link>
        </p>
      )}

      <Button
        type="submit"
        disabled={!haveAvailableCustomers || isSubmitting}
        className="flex items-center justify-center gap-1"
      >
        {isSubmitting && <Loader2 className="size-3.5 animate-spin" />}
        Cadastrar
      </Button>
    </form>
  )
}
