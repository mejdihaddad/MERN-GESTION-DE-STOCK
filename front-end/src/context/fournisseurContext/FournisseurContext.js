import FournisseurReducer from "./FournisseurReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  fournisseurs: [],
  isFetching: false,
  error: false,
};

export const FournisseurContext = createContext(INITIAL_STATE);

export const FournisseurContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FournisseurReducer, INITIAL_STATE);

  return (
    <FournisseurContext.Provider
      value={{
        fournisseurs: state.fournisseurs,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </FournisseurContext.Provider>
  );
};