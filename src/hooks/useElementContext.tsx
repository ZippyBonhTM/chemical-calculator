import ElementContext from "@/context/context";
import { useContext } from "react";

const useElementContext = () => {
  return useContext(ElementContext);
};

export default useElementContext;
