"use client";

import { ReactNode, useState } from "react";
import { ElementType } from "@/types/ElementAtributes";
import ElementClient from "@/client";

import { createContext, Dispatch, SetStateAction } from "react";

interface ElementContextProps {
  elements: ElementType[] | null;
  setElements: Dispatch<SetStateAction<ElementType[] | null>>;
  loadElements: () => void;
}

const ElementContext = createContext<ElementContextProps | null>(null);

interface ElementProviderProps {
  children: ReactNode;
}

export function ElementProvider({ children }: ElementProviderProps) {
  const [elements, setElements] = useState<ElementType[] | null>(null);

  const loadElements = () => {
    try {
      ElementClient.getAllElements()
        .then((value) => {
          setElements(value);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ElementContext.Provider value={{ elements, setElements, loadElements }}>
      {children}
    </ElementContext.Provider>
  );
}

export default ElementContext;