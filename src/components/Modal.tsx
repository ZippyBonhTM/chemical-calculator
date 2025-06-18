import { ReactNode } from "react";

interface ModalPorps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalPorps) {
  if (!isOpen) return null;
  return (
    <div onClick={onClose} className="flex absolute items-center justify-center min-w-[30rem] bg-white bg-opacity-50">
      <div className="flex flex-col bg-n p-6 rounded-lg relative max-w-[60rem]">
        <button className="absolute top-2 right-2 text-xl font-bold" onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};
