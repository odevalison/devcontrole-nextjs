"use client";

import { Button } from "@/app/dashboard/components/button";
import { useDeleteCustomer } from "@/hooks/mutations/use-delete-customer";

export function CardCustomerDeleteButton({ id }: { id: string }) {
  const { mutate, isPending } = useDeleteCustomer(id);

  return (
    <Button
      disabled={isPending}
      variant="danger"
      className="w-full"
      onClick={() => mutate()}
    >
      {isPending ? "Deletando..." : "Deletar"}
    </Button>
  );
}
