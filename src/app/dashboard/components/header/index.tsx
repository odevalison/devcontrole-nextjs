import Link from "next/link";

export function HeaderDashboard() {
  return (
    <header className="rounded-lg bg-[#111827] px-4 py-2 text-white shadow">
      <nav className="space-x-4 text-sm">
        <Link className="font-semibold" href="/dashboard">
          Chamados
        </Link>
        <Link className="font-semibold" href="/dashboard/customers">
          Clientes
        </Link>
      </nav>
    </header>
  );
}
