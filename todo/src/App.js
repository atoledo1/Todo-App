import React, { useState, useReducer } from "react";
import "./App.css";
import { initialState, reducer } from "./reducers/reducer.js";
import AddTodo from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { WiredCard, WiredDivider } from "react-wired-elements";
import { RoughNotation } from "react-rough-notation";

function App() {
  const [currentTodo, setCurrentTodo] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = (evt) => {
    setCurrentTodo(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({ type: "ADD_TODO", payload: currentTodo });
    setCurrentTodo("");
  };

  const toggleTask = (todoId) => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: todoId });
  };

  const clearCompleted = (evt) => {
    evt.preventDefault();
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  console.log("app", state);

  return (
    <div className="background" >
 
      <WiredCard   elevation="5">
     
        <h1>To-Do List</h1>
<WiredDivider elevation="2"/>
<RoughNotation  type="underline" show={true}>
        <AddTodo
          handleChanges={handleChanges}
          handleSubmit={handleSubmit}
          currentTodo={currentTodo}
          clearCompleted={clearCompleted}
        />
        
         </RoughNotation>

        <TodoList todos={state} toggleTask={toggleTask} />
     
      </WiredCard>
    </div>
   
  );
}

export default App;
