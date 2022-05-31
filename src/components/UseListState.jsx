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

    
    return {
        list,
        handleChange,
        handleSubmit,
    };
    };

    export default useListState;