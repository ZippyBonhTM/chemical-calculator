'use client'

import { ReactNode, useEffect, useState } from "react";
import ElementContext from "./context";
import { ElementType } from "@/types/ElementAtributes";
import ElementClient from "@/client";

interface ElementProviderProps {
  children: ReactNode;
}

export default function ElementProvider({ children }: ElementProviderProps) {
  const [elements, setElements] = useState<ElementType[] | null>(null);

  useEffect(() => {
    ElementClient.getAllElements()
      .then((value) => setElements(value));
  }, []);

  return (
    <ElementContext.Provider value={{ elements, setElements }}>
      {children}
    </ElementContext.Provider>
  );
}
