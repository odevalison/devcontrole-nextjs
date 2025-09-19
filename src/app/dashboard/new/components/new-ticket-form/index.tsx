'use client'

import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { Textarea } from '@/components/textarea'
import { useOpenNewTicket } from '@/hooks/mutations/use-open-new-ticket'
import { useUserCustomers } from '@/hooks/queries/use-user-customers'
import {
  OpenNewTicketFormData,
  useOpenNewTicketForm,
} from '@/hooks/use-open-new-ticket-form'

export const NewTicketForm = () => {
  const router = useRouter()
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useOpenNewTicketForm()
  const { data: customers } = useUserCustomers()
  const openNewTicketMutation = useOpenNewTicket()
  const userHaveAvailableCustomers = !!customers?.length

  const handleOpenNewTicket = async (data: OpenNewTicketFormData) => {
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
        disabled={!userHaveAvailableCustomers || isSubmitting}
        placeholder="Digite o nome do chamado"
      />
      <Textarea
        {...register('description')}
        error={errors.description?.message}
        rows={4}
        label="Descreva o problema"
        disabled={!userHaveAvailableCustomers || isSubmitting}
        placeholder="Digite uma breve descrição"
      />

      {userHaveAvailableCustomers && (
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

      {!userHaveAvailableCustomers && (
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
        disabled={!userHaveAvailableCustomers || isSubmitting}
        className="flex items-center justify-center gap-1"
      >
        {isSubmitting && <Loader2 className="size-3.5 animate-spin" />}
        Cadastrar
      </Button>
    </form>
  )
}
