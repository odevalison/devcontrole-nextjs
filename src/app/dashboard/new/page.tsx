import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/lib/auth'

import { NewTicketForm } from './components/new-ticket-form'

const NewTicket = async () => {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect('/')
  }
  return (
    <main>
      <div className="flex items-center gap-3">
        <Link
          href="/dashboard"
          title="Voltar"
          className="rounded-full bg-gray-900 p-1.5 drop-shadow transition hover:opacity-95"
        >
          <ArrowLeft className="size-5 text-white" />
        </Link>
        <h1 className="text-2xl font-bold">Abrir novo chamado</h1>
      </div>
      <NewTicketForm />
    </main>
  )
}

export default NewTicket
