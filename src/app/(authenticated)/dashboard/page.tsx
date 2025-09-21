import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/lib/auth'

import { Button } from '../../../components/button'
import { RefreshButton } from './components/refresh-button'
import { TicketsTable } from './components/tickets-table'

const DashboardPage = async () => {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect('/')
  }

  return (
    <main className="space-y-6.5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Chamados</h1>
        <div className="flex items-center gap-2">
          <RefreshButton />
          <Button>
            <Link href="/dashboard/new">Abrir chamado</Link>
          </Button>
        </div>
      </div>
      <TicketsTable />
    </main>
  )
}

export default DashboardPage
