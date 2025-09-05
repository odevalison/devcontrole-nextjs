import { CustomerCard } from "./components/customer-card";
import { NewCustomerModal } from "./components/new-customer-modal";
import { OpenNewCustomerModalButton } from "./components/open-new-customer-modal-button";

export default function CustomersPage() {
  return (
    <main className="space-y-6.5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Clientes</h1>
        <OpenNewCustomerModalButton />
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
