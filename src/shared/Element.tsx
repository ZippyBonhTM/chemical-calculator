"use client";

import ElementModalInfo from "@/components/ElementModalInfo";
import Modal from "@/components/Modal";
import { ElementCategoryInfo, ElementType } from "@/types/ElementAtributes";
import { useState } from "react";

const Element = (element: ElementType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const elementColor = ElementCategoryInfo[element.category.value].color;

  return (
    <>
      <button onClick={() => setIsModalOpen(true)} className="relative flex justify-between p-0.5 w-[6.3rem] h-[6.3rem] border" style={{ borderColor: elementColor }}>
        <section className="flex flex-col justify-between items-start">
          <div>{element.atomicNumber.value}</div>
          <div className="text-start">
            <div className="text-sm">{element.name.value}</div>
            <div className="text-xs">{element.atomicWeight.value}</div>
          </div>
        </section>
        <section className="flex items-center absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]" style={{ color: elementColor }}>
          <div className="text-2xl">{element.symbol.value}</div>
        </section>
        <section className="flex items-end">
          <div className="flex flex-col items-center text-xs pb-1">
            {typeof element.electronConfiguration.value === 'string'
            ? element.electronConfiguration.value
            : element.electronConfiguration.value.map(({ electrons, subshell }, index) => <p key={index}>{subshell}{electrons}</p>)}
          </div>
        </section>
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ElementModalInfo element={element} />
      </Modal>
    </>
  );
};

export default Element;
