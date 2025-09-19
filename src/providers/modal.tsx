'use client'

import { createContext, useContext, useState } from 'react'

import { Ticket } from '@/utils/ticket.type'

type ModalContextData = {
  modalIsOpen: boolean
  ticketInfos: Ticket | null
  closeModal: () => void
  openModal: () => void
  passTicketInfos: (infos: Ticket) => void
}

type ModalProviderProps = {
  children: React.ReactNode
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData)

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [ticketInfos, setTicketInfos] = useState<Ticket | null>(null)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const passTicketInfos = (infos: Ticket) => {
    setTicketInfos(infos)
  }

  return (
    <ModalContext
      value={{
        modalIsOpen,
        openModal,
        closeModal,
        passTicketInfos,
        ticketInfos,
      }}
    >
      {children}
    </ModalContext>
  )
}

const useModal = () => useContext(ModalContext)

export { ModalContext, ModalProvider, useModal }
