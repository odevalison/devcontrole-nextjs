'use client'

import { useQueryClient } from '@tanstack/react-query'
import { RefreshCw } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'

import { Button } from '@/components/button'

export const RefreshButton = () => {
  const { refresh } = useRouter()
  const queryClient = useQueryClient()
  const button = useRef<HTMLButtonElement>(null)

  const handleRefreshPage = () => {
    button.current?.children[0].classList.add('animate-[1s_spin_100ms]')
    queryClient.invalidateQueries({
      queryKey: ['customers-tickets'],
    })
    refresh()
  }

  return (
    <Button
      color="secondary"
      size="icon"
      ref={button}
      onClick={handleRefreshPage}
      className="flex items-center justify-center *:size-5"
    >
      <RefreshCw />
    </Button>
  )
}
