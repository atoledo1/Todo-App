import React, { useState } from "react";
import "wired-elements";

const TodoForm = (props) => {
  const [newTaskName, setNewTaskName] = useState();

  const handleChanges = (e) => {
    setNewTaskName(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.dispatch({ type: "ADD_TODO", payload: newTaskName });
        setNewTaskName("");
      }}
    >
      <input
        onChange={handleChanges}
        type="text"
        name="newTaskName"
        value={newTaskName}
      />
      <button>Add Task</button>
      <button onClick={() => props.dispatch({ type: "CLEAR_COMPLETED" })}>
        Clear Completed
      </button>
    </form>
  );
};
export default TodoForm;
