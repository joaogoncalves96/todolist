import React, { createContext } from "react";
import useListState from "./UseListState";

export const ListContext = createContext();

const ListProvider = ({ children }) => {
  const { handleChange, handleSubmit, text, list, handleDelete } =
    useListState();

  return (
    <ListContext.Provider value={{ list, handleChange, handleSubmit, text, list, handleDelete }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
