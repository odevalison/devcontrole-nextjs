"use client";

import { Button } from "@/app/dashboard/components/button";
import { Input } from "@/components/input";
import { useModal } from "@/context/modal";
import { useCustomerForm } from "@/hooks/use-customer-form";
import { api } from "@/lib/api";

import { NewCustomerFormSchemaData } from "./schema";

export function NewCustomerForm() {
  const { closeModal } = useModal();
  const { register, handleSubmit, formState } = useCustomerForm();

  const handleRegisterCustomer = async (data: NewCustomerFormSchemaData) => {
    try {
      const response = await api.post("/api/customer", { ...data });
      if (response.status !== 200) {
        throw new Error("Error on add customer");
      }
      closeModal();
    } catch (error) {
      if (error instanceof Error) {
        throw Error(error.message);
      }
      throw new Error("Something wrong happened on add customer");
    }
  };

  return (
    <>
      <form
        className="w-full space-y-4"
        onSubmit={handleSubmit(handleRegisterCustomer)}
      >
        <div className="space-y-3">
          <Input
            error={formState.errors.name?.message}
            {...register("name")}
            label="Nome completo"
            placeholder="Digite o nome do usuário"
          />
          <Input
            error={formState.errors.email?.message}
            {...register("email")}
            label="E-mail"
            placeholder="Digite o e-mail do usuário"
          />
          <Input
            error={formState.errors.phone?.message}
            {...register("phone")}
            label="Telefone"
            placeholder="Digite o telefone do usuário"
          />
          <Input
            error={formState.errors.address?.message}
            {...register("address")}
            label="Endereço (opcional)"
            placeholder="Digite o endereço do usuário"
          />
        </div>

        <div className="flex items-center gap-2 *:flex-1">
          <Button onClick={closeModal} variant="secondary">
            Cancelar
          </Button>
          <Button disabled={formState.isSubmitting} type="submit">
            {formState.isSubmitting ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </div>
      </form>
    </>
  );
}
