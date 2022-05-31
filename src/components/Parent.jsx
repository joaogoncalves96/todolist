import React from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import useListState from "./UseListState";

const Parent = () => {
    const { handleChange, handleSubmit, text, list } = useListState();

  return (
    <>
      <ToDoForm handleChange={handleChange} handleSubmit={handleSubmit} text={text} />
      <ToDoList list={list}/>
    </>
  );
}

export default Parent;