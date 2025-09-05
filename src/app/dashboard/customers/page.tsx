"use client";

import { useModal } from "@/context/modal";

import { Button } from "../components/button";
import { CustomerCard } from "./components/customer-card";
import { NewCustomerModal } from "./components/new-customer-modal";

export default function CustomersPage() {
  const { openModal } = useModal();

  return (
    <main className="space-y-6.5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Meus clientes</h1>
        <Button onClick={openModal}>Novo cliente</Button>
        <NewCustomerModal />
      </div>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
      </section>
    </main>
  );
}
