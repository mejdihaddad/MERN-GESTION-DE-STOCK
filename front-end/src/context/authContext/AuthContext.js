import AuthReducer from "./AuthReducer";
import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  utilisateur: JSON.parse(localStorage.getItem("utilisateur")) || null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("utilisateur", JSON.stringify(state.utilisateur));
  }, [state.utilisateur]);

  return (
    <AuthContext.Provider
      value={{
        utilisateur: state.utilisateur,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};