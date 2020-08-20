import React, { createContext, useReducer } from "react";
import searchReducer from "./searchReducer";
const initialState = {
  term: null,
};

export const SearchContext = createContext(initialState);

export const SearchProvdier = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  //actions
  function setSearchTerm(term) {
    dispatch({
      type: "SET_SEARCH_TERM",
      payload: term,
    });
  }

  return (
    <SearchContext.Provider value={{ term: state.term, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};
