
const ToDoList = ({ list }) => (
  <div>
    {list.map((todo, index) => {
      return <p key={index}>{todo}</p>;
    })}
  </div>
);

export default ToDoList;
