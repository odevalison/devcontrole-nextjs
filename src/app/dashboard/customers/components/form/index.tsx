"use client";

import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { Button } from "@/app/dashboard/components/button";
import { Input } from "@/components/input";
import { useModal } from "@/context/modal";
import { useCustomerForm } from "@/hooks/use-customer-form";
import { api } from "@/lib/api";

import { NewCustomerFormData } from "./schema";

export function NewCustomerForm() {
  const { data: session } = useSession();
  if (!session || !session?.user) {
    redirect("/");
  }
  const { refresh } = useRouter();
  const { closeModal } = useModal();
  const { register, handleSubmit, formState } = useCustomerForm();
  const handleRegister = async (customerData: NewCustomerFormData) => {
    await api.post("/api/customer", {
      ...customerData,
      userId: session.user.id,
    });
    refresh();
    closeModal();
  };

  return (
    <form className="w-full space-y-4" onSubmit={handleSubmit(handleRegister)}>
      <div className="space-y-3">
        <Input
          error={formState.errors.name?.message}
          {...register("name")}
          label="Nome completo"
          placeholder="Digite o nome do cliente"
        />
        <Input
          error={formState.errors.email?.message}
          {...register("email")}
          label="E-mail"
          placeholder="Digite o e-mail do cliente"
        />
        <Input
          error={formState.errors.phone?.message}
          {...register("phone")}
          label="Telefone"
          placeholder="Digite o telefone do cliente"
        />
        <Input
          error={formState.errors.address?.message}
          {...register("address")}
          label="Endereço (opcional)"
          placeholder="Digite o endereço do cliente"
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
  );
}
