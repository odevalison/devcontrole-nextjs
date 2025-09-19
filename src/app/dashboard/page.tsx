import Link from 'next/link'

import { Button } from '../../components/button'
import { TicketsTable } from './components/tickets-table'

const DashboardPage = async () => {
  return (
    <main className="space-y-6.5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Chamados</h1>
        <Button>
          <Link href="/dashboard/new">Abrir chamado</Link>
        </Button>
      </div>
      <TicketsTable />
    </main>
  )
}

export default DashboardPage
