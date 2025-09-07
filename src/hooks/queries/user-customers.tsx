"use client";

import { useQuery } from "@tanstack/react-query";

import { getCustomers } from "@/app/actions/get-customers";

export function useCustomers() {
  return useQuery({
    queryKey: ["get-user-customers"],
    queryFn: getCustomers,
  });
}
