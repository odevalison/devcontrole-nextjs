"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createUserCustomer } from "@/app/actions/create-user-customer";

export function useCreateCustomer() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["create-user-customer"],
    mutationFn: createUserCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-user-customers"] });
    },
  });
}
