import React from "react";

const Todo = (props) => {
  return (
    <div
      className={`task${props.completed ? " completed" : ""}`}
      onClick={(e) => {
        props.dispatch({
          type: "TOGGLE_COMPLETED",
          payload: e.target.textContent,
        });
      }}
    >
      <p>{props.task}</p>
    </div>
  );
};

export default Todo;
