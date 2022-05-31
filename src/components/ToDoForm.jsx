const ToDoForm = ({ handleChange, handleSubmit, text }) => {
  return (
    <>
      <input
        value={text}
        type="text"
        onChange={handleChange}
        placeholder="Enter task..."
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

//   const [userInput, setUserInput] = useState("");
//   const [todos, setTodos] = useState([]);

//   const handleChange = (e) => {
//     setUserInput(e.currentTarget.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTodos([...todos, userInput]);
//     setUserInput("");
//     console.log(todos);
//   };

//   const handleDelete = (e) => {
//     e.preventDefault();
//     setTodos(todos.filter((todo) => todo !== e.currentTarget.value));
//   };

//   return (
//     <>
//         <input
//           value={userInput}
//           type="text"
//           onChange={handleChange}
//           placeholder="Enter task..."
//         />
//         <button onClick={handleSubmit}>Submit</button>
//       <div>
//         {todos.map((todo, index) => {
//           return <p key={index}>{todo}</p>;
//         })}
//       </div>
//       <div>
//         {todos.map((todo, index) => {
//           return (
//             <button key={index} value={todo} onClick={handleDelete}>
//               Delete
//             </button>
//           );
//         })}
//       </div>
//     </>
//   );
// };

export default ToDoForm;
