import { ReactNode } from "react";

interface ModalPorps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalPorps) {
  if (!isOpen) return null;
  return (
    <div className="flex flex-col items-end-safe px-2 pb-2 absolute bg-neutral-800 rounded-xl shadow-neutral-600 shadow-lg bg-opacity-50 z-10">
      <button className="mt-0.5 text-2xl" onClick={onClose}>
        ✖
      </button>
      <div className="flex flex-col bg-n rounded-lg relative max-w-[60rem]">
        {children}
      </div>
    </div>
  );
};
