import AuthContext from "./AuthProvider";
import ElementContext from "./ElementsProvider";

const context = {
  auth: AuthContext,
  element: ElementContext
}

export default context;