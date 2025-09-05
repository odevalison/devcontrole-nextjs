"use client";

import { createPortal } from "react-dom";

import { useModal } from "@/context/modal";

export function NewCustomerModal() {
  const { modalIsOpen } = useModal();

  if (!modalIsOpen) return null;

  return createPortal(
    <div className="size-screen fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="size-[400px] rounded-xl bg-white shadow"></div>
    </div>,
    document.body,
  );
}
