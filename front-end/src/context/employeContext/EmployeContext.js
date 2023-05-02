import EmployeReducer from "./EmployeReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  employes: [],
  isFetching: false,
  error: false,
};

export const EmployeContext = createContext(INITIAL_STATE);

export const EmployeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(EmployeReducer, INITIAL_STATE);

  return (
    <EmployeContext.Provider
      value={{
        employes: state.employes,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </EmployeContext.Provider>
  );
};