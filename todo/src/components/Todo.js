import React from "react";
import { RoughNotation } from "react-rough-notation";
export default function Todo(props) {
  const { item, id, completed } = props.todo;
  return (
    <div
      onClick={() => props.toggleTask(id)}
      className={`${completed ? "completed" : ""}`}
    >
      <RoughNotation type="strike-through" show={completed}>
        <li>{item}</li>
      </RoughNotation>
    </div>
  );
}
