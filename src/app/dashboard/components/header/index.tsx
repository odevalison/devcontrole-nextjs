import { EditIcon, Users2 } from 'lucide-react'

import { ActiveLink } from '../active-link'

export const HeaderDashboard = () => {
  return (
    <header className="rounded-md bg-zinc-900 px-4 py-2 text-white shadow">
      <nav className="flex items-center gap-4 text-sm">
        <ActiveLink prefetch href="/dashboard">
          <EditIcon className="size-3.5" /> Chamados
        </ActiveLink>
        <ActiveLink prefetch href="/dashboard/customers">
          <Users2 className="size-3.5" /> Clientes
        </ActiveLink>
      </nav>
    </header>
  )
}
