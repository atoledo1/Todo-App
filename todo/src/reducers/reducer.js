export const initialTodoList = {
  todos: [
    {
      task: "Clean Room",
      completed: false,
      id: 1000000000,
    },
    {
      task: "Do Laundry",
      completed: false,
      id: 2000000000,
    },
    {
      task: "Walk dog",
      completed: true,
      id: 3000000000,
    },
    {
      task: "Dust books",
      completed: false,
      id: 4000000000,
    },
    {
      task: "Cook dinner",
      completed: false,
      id: 5000000000,
    },
  ],
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            task: action.payload,
            completed: false,
            id: state.todos.length + 1,
          },
        ],
      };
    case "TOGGLE_COMPLETED":
      console.log(action, state.todos);
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) =>
            todo.task === action.payload
              ? { ...todo, completed: !todo.completed }
              : todo
          ),
        ],
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: [...state.todos.filter((task) => task.completed !== true)],
      };
    default:
      return state;
  }
};
