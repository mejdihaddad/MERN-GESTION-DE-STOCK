import ArticleReducer from "./ArticleReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  articles: [],
  isFetching: false,
  error: false,
};

export const ArticleContext = createContext(INITIAL_STATE);

export const ArticleContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ArticleReducer, INITIAL_STATE);

  return (
    <ArticleContext.Provider
      value={{
        articles: state.articles,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};