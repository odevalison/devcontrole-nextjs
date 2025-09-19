'use client'

import './styles.css'

import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'

import { useIsClient } from '@/hooks/use-is-client'
import { useModal } from '@/providers/modal'

import { NewCustomerForm } from '../new-customer-form'

export const NewCustomerModal = () => {
  const { modalIsOpen, closeModal } = useModal()
  const isClient = useIsClient()
  const modalRef = useRef<HTMLDivElement>(null)

  if (!isClient) return null

  return (
    <CSSTransition
      in={modalIsOpen}
      timeout={500}
      nodeRef={modalRef}
      classNames="new-customer-modal"
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
              className="flex w-md max-w-full flex-col items-center justify-center space-y-5 rounded-xl bg-white p-5 shadow"
              onClick={(e) => e.stopPropagation()}
            >
              <h1 className="text-2xl font-bold">Novo cliente</h1>
              <NewCustomerForm />
            </div>
          </div>,
          document.body,
        )}
      </>
    </CSSTransition>
  )
}
