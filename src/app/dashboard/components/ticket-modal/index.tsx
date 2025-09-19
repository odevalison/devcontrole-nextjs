'use client'

import './styles.css'

import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'

import { Button } from '@/components/button'
import { useIsClient } from '@/hooks/use-is-client'
import { useModal } from '@/providers/modal'

export const TicketModal = () => {
  const { closeModal, modalIsOpen, ticketInfos } = useModal()
  const isClient = useIsClient()
  const modalRef = useRef<HTMLDivElement>(null)

  if (!isClient) return null

  return (
    <CSSTransition
      in={modalIsOpen}
      timeout={500}
      nodeRef={modalRef}
      classNames="ticket-modal"
      unmountOnExit
    >
      <>
        {createPortal(
          <div
            ref={modalRef}
            className="fixed top-0 right-0 bottom-0 left-0 flex h-screen w-full items-center justify-center bg-black/20 p-5 backdrop-blur-sm"
            onClick={closeModal}
          >
            <div
              className="flex w-md max-w-full flex-col space-y-3 rounded-xl bg-white p-5 shadow-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold md:text-xl">
                  Detalhes do chamado
                </h1>

                <Button color="danger" onClick={closeModal}>
                  Fechar
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <strong className="text-sm text-zinc-900">Nome:</strong>
                <p className="text-sm text-zinc-500">{ticketInfos?.name}</p>
              </div>

              <div className="flex flex-col flex-wrap gap-1">
                <strong className="text-sm text-zinc-900">Descrição:</strong>
                <p className="text-sm text-zinc-500">
                  {ticketInfos?.description}
                </p>
              </div>

              <div className="h-[1px] w-full bg-zinc-200" />

              <div className="flex flex-col space-y-3">
                <h2 className="text-lg font-semibold text-zinc-900">
                  Detalhes do cliente
                </h2>

                <div className="flex flex-wrap items-center gap-2">
                  <strong className="text-sm text-zinc-900">Nome:</strong>
                  <p className="text-sm text-zinc-500">
                    {ticketInfos?.customer?.name}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <strong className="text-sm text-zinc-900">Telefone:</strong>
                  <p className="text-sm text-zinc-500">
                    {ticketInfos?.customer?.phone}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <strong className="text-sm text-zinc-900">E-mail:</strong>
                  <p className="text-sm text-zinc-500">
                    {ticketInfos?.customer?.email}
                  </p>
                </div>

                {ticketInfos?.customer?.address && (
                  <div className="flex flex-wrap items-center gap-2">
                    <strong className="text-sm text-zinc-900">Endereço:</strong>
                    <p className="text-sm text-zinc-500">
                      {ticketInfos?.customer?.address}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>,
          document.body,
        )}
      </>
    </CSSTransition>
  )
}
