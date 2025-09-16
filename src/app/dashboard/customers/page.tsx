import { CustomersGrid } from "./components/customers-grid";
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
      <CustomersGrid />
    </main>
  );
}
