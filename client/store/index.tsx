import React, { useReducer, useContext } from "react";
import { reducer, initialState } from "./reducer";

const Store = React.createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Store.Provider value={[state, dispatch]}>{children}</Store.Provider>;
};

export { Store, Provider };
export default () => useContext(Store);
