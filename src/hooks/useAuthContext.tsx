import context from "@/context";
import { useContext } from "react";

const useAuthContext = () => {
  return useContext(context.auth)
}

export default useAuthContext;