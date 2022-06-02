import { useState } from "react";

const useListState = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, text]);
    setText("");
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setList(list.filter((todo) => todo !== e.currentTarget.value));
  };

  return {
    list,
    handleChange,
    handleSubmit,
    handleDelete,
  };
};

export default useListState;
