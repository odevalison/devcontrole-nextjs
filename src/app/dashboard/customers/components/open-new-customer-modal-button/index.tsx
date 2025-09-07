"use client";

import { Button } from "@/app/dashboard/components/button";
import { useModal } from "@/context/modal";

export function OpenNewCustomerModalButton() {
  const { openModal } = useModal();
  return <Button onClick={openModal}>Novo cliente</Button>;
}
