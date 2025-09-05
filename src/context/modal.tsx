"use client";

import { createContext, use, useState } from "react";

interface ModalContextData {
  modalIsOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <ModalContext value={{ modalIsOpen, openModal, closeModal }}>
      {children}
    </ModalContext>
  );
}

const useModal = () => use(ModalContext);

export { ModalContext, ModalProvider, useModal };
