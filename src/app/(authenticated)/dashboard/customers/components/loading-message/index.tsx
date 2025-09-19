import { Loader2 } from 'lucide-react'

export const LoadingMessage = () => {
  return (
    <p className="flex items-center gap-1 text-sm font-medium text-zinc-500">
      <Loader2 className="size-3.5 animate-spin" /> Buscando clientes
    </p>
  )
}
