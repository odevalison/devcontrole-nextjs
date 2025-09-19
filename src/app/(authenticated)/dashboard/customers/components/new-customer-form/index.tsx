'use client'

import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { useAddNewCustomer } from '@/hooks/mutations/use-add-new-customer'
import { useCustomerForm } from '@/hooks/use-customer-form'
import { useModal } from '@/providers/modal'

import { NewCustomerFormData } from '../../../../../../hooks/use-customer-form'

export const NewCustomerForm = () => {
  const { closeModal } = useModal()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useCustomerForm()
  const addNewCustomerMutation = useAddNewCustomer()

  const handleAddNewCustomer = async (data: NewCustomerFormData) => {
    try {
      await addNewCustomerMutation.mutateAsync(data)
      closeModal()
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    }
  }

  return (
    <form
      className="w-full space-y-4"
      onSubmit={handleSubmit(handleAddNewCustomer)}
    >
      <div className="space-y-3">
        <Input
          {...register('name')}
          error={errors.name?.message}
          label="Nome completo"
          placeholder="Digite o nome do cliente"
        />

        <Input
          {...register('email')}
          error={errors.email?.message}
          label="E-mail"
          placeholder="Digite o e-mail do cliente"
        />

        <Input
          {...register('phone')}
          error={errors.phone?.message}
          label="Telefone"
          placeholder="Digite o telefone do cliente"
        />

        <Input
          {...register('address')}
          error={errors.address?.message}
          label="Endereço (opcional)"
          placeholder="Digite o endereço do cliente"
        />
      </div>

      <div className="flex items-center gap-2 *:flex-1">
        <Button onClick={closeModal} color="secondary">
          Cancelar
        </Button>

        <Button
          disabled={isSubmitting}
          type="submit"
          className="flex items-center justify-center gap-1"
        >
          {isSubmitting && <Loader2 className="size-3.5 animate-spin" />}
          Cadastrar
        </Button>
      </div>
    </form>
  )
}
