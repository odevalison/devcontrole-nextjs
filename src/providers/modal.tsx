'use client'

import { createContext, useContext, useState } from 'react'

type ModalContextData = {
  modalIsOpen: boolean
  closeModal: () => void
  openModal: () => void
}

type ModalProviderProps = {
  children: React.ReactNode
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData)

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <ModalContext
      value={{
        modalIsOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext>
  )
}

const useModal = () => useContext(ModalContext)

export { ModalContext, ModalProvider, useModal }
