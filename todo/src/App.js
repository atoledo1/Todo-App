import React, { useReducer } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import { todoReducer, initialTodoList } from "./reducers/reducer";

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialTodoList);

  return (
    <div className="App">
      <h1>To-do List</h1>
      <div>
        <TodoForm dispatch={dispatch} />
      </div>
      <div>
        <TodoList todos={state.todos} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default App;
