"use client";

import "./styles.css";

import { useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import { useModal } from "@/context/modal";
import { useIsClient } from "@/hooks/use-is-client";

import { NewCustomerForm } from "../form";

export function NewCustomerModal() {
  const { modalIsOpen } = useModal();
  const isClient = useIsClient();
  const modalRef = useRef<HTMLDivElement>(null);

  if (!isClient) return null;

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
            className="size-screen fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black/10 p-5 backdrop-blur"
          >
            <div className="flex w-md max-w-full flex-col items-center justify-center space-y-5 rounded-xl bg-white p-5 shadow">
              <h1 className="text-2xl font-bold">Novo cliente</h1>
              <NewCustomerForm />
            </div>
          </div>,
          document.body,
        )}
      </>
    </CSSTransition>
  );
}
