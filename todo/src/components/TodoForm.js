import React from 'react';
import "../App.css";
import { WiredInput, WiredButton } from 'react-wired-elements';


export default function AddTodo(props) {
    return (
        <div className="add-todo">

            <WiredInput className="borde"

    type="text"
    name="currentTodo"
    value={props.currentTodo}
    onChange={props.handleChanges}
                        placeholder="New Task"
    />


            <WiredButton onClick={props.handleSubmit}>Add Item</WiredButton>
            <WiredButton onClick={props.clearCompleted}>Clear Completed</WiredButton>
        </div>
    );
}