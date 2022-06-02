import { ListContext } from "./ListProvider";

const ToDoList = () => {
  return (
    <ListContext.Consumer>
      {({ list, handleDelete }) => {
        return (
          <div>
          {list.map((todo) => {
            return (
              <div key={todo}>
                <p>{todo}</p>
                <button value={todo} onClick={handleDelete}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>)
        ;
      }}
    </ListContext.Consumer>
  );
};

export default ToDoList;
