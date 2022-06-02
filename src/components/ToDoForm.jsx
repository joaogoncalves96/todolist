import {Link} from "react-router-dom";
import { ListContext } from "./ListProvider";

const ToDoForm = () => {
  return (
    <ListContext.Consumer>
      {({ handleChange, handleSubmit, text }) => {
        return (
          <>
            <input
              type="text"
              name="text"
              placeholder="Add a new todo"
              value={text}
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Add</button>
            <Link to="/list">NAVIGATE TO LIST</Link>
          </>
        );
      }  }
    </ListContext.Consumer>
  );
};


export default ToDoForm;
