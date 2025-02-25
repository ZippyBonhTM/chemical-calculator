import { ReactNode } from "react";

interface ModalPorps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalPorps) {
    if (!isOpen) return null; 
    return (
        <div className="flex fixed inset-0 items-center justify-center bg-black bg-opacity-50 z-[9999]">
            <div className="flex flex-col bg-n p-6 rounded-lg relative z-[9999] max-w-[60rem]">
                <button className="absolute top-2 right-2 text-xl font-bold" onClick={onClose}>
                    ✖
                </button>
                {children}
            </div>
        </div>
    );
};
