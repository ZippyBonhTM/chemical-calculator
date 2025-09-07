import context from "@/context";
import { useContext } from "react";

const useElementContext = () => {
  return useContext(context.element);
};

export default useElementContext;
