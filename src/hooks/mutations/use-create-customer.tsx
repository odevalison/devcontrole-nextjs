"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createCustomer } from "@/app/actions/create-customer";

export function useCreateCustomer() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["create-user-customer"],
    mutationFn: createCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-user-customers"] });
    },
  });
}
