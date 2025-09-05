"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  newCustomerFormSchema,
  NewCustomerFormSchemaData,
} from "@/app/dashboard/customers/components/form/schema";

export function useCustomerForm() {
  return useForm<NewCustomerFormSchemaData>({
    resolver: zodResolver(newCustomerFormSchema),
    mode: "onSubmit",
    defaultValues: { email: "", name: "", phone: "", address: "" },
  });
}
