"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteCustomer } from "@/app/actions/delete-customer";

export function useDeleteCustomer(customerId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["delete-user-customer", customerId],
    mutationFn: () => deleteCustomer({ customerId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-user-customers"] });
    },
  });
}
