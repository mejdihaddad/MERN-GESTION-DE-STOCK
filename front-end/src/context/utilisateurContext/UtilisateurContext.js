import UtilisateurReducer from "./UtilisateurReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  utilisateurs: [],
  isFetching: false,
  error: false,
};

export const UtilisateurContext = createContext(INITIAL_STATE);

export const UtilisateurContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UtilisateurReducer, INITIAL_STATE);

  return (
    <UtilisateurContext.Provider
      value={{
        utilisateurs: state.utilisateurs,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </UtilisateurContext.Provider>
  );
};