'use client'
import { ElementType } from "@/types/ElementAtributes";
import { createContext, Dispatch, SetStateAction } from "react";

interface ElementContextProps {
  elements: ElementType[] | null;
  setElements: Dispatch<SetStateAction<ElementType[] | null>>;
}

const ElementContext = createContext<ElementContextProps | null>(null);

export default ElementContext;
