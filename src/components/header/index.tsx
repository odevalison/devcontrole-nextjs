'use client'

import { Loader2, LogInIcon, LogOutIcon, UserCircle2Icon } from 'lucide-react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

export const Header = () => {
  const { status } = useSession()

  const handleUserLogin = async () => {
    try {
      await signIn()
    } catch (error) {
      if (error instanceof Error) {
        throw Error(error.message)
      }
      throw new Error('Erro ao fazer login.')
    }
  }

  const handleUserLogout = async () => {
    try {
      await signOut()
    } catch (error) {
      if (error instanceof Error) {
        throw Error(error.message)
      }
      throw new Error('Não foi possível sair da conta')
    }
  }

  return (
    <header className="flex h-20 w-full bg-white px-5 shadow-sm">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link prefetch href="/" title="Voltar para o início">
          <h1 className="text-3xl font-extrabold transition-all duration-300">
            <span className="text-blue-500">Dev</span>Controle
          </h1>
        </Link>

        {status === 'loading' && (
          <Loader2 className="size-6 animate-spin text-zinc-500" />
        )}

        {status === 'unauthenticated' && (
          <button title="Entrar" onClick={handleUserLogin}>
            <LogInIcon className="size-6 text-zinc-500" />
          </button>
        )}

        {status === 'authenticated' && (
          <div className="flex items-baseline gap-3">
            <Link
              prefetch
              href="/dashboard"
              title="Meus chamados"
              className="text-zinc-500 transition hover:opacity-75"
            >
              <UserCircle2Icon className="size-6" />
            </Link>
            <button
              title="Sair"
              className="text-zinc-500 transition hover:opacity-75"
              onClick={handleUserLogout}
            >
              <LogOutIcon className="size-6" />
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
