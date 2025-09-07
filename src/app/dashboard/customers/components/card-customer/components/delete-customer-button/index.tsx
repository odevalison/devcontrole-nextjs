"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { Button } from "@/app/dashboard/components/button";
import { api } from "@/lib/api";

export function DeleteCustomerButton({ id }: { id: string }) {
  const { refresh } = useRouter();
  const { mutate, isPending } = useMutation({
    mutationKey: ["delete-customer"],
    mutationFn: async () => {
      await api.delete("/api/customer", { params: { id } });
      refresh();
    },
  });

  return (
    <>
      <Button
        disabled={isPending}
        variant="danger"
        className="w-full"
        onClick={() => mutate()}
      >
        {isPending ? "Deletando..." : "Deletar"}
      </Button>
    </>
  );
}
