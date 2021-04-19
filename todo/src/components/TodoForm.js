import React from 'react';

import "wired-elements"

export default function AddTodo(props) {
    return (
        <div className="add-todo">
            <input
    type="text"
    name="currentTodo"
    value={props.currentTodo}
    onChange={props.handleChanges}
    />
            <wired-button onClick={props.handleSubmit}>Add Item</wired-button>
            <wired-button onClick={props.clearCompleted}>Clear Completed</wired-button>
        </div>
    );
}