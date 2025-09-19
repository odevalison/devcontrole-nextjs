'use client'

import { Button } from '@/components/button'
import { useModal } from '@/providers/modal'

export const OpenModalButton = () => {
  const { openModal } = useModal()
  return <Button onClick={openModal}>Novo cliente</Button>
}
