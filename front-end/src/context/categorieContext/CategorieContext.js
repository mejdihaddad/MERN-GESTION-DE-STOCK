import CategorieReducer from "./CategorieReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  categories: [],
  isFetching: false,
  error: false,
};

export const CategorieContext = createContext(INITIAL_STATE);

export const CategorieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CategorieReducer, INITIAL_STATE);

  return (
    <CategorieContext.Provider
      value={{
        categories: state.categories,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </CategorieContext.Provider>
  );
};