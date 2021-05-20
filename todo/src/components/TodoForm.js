import React from "react";
import "../App.css";
import { WiredInput, WiredButton } from "react-wired-elements";

export default function AddTodo(props) {
  return (
    <div className="add-todo">
     
  <input type="text" style={{ color:"#1780a1", borderBlockColor:"#1780a1"}}  name="currentTodo"
        value={props.currentTodo}
        onChange={props.handleChanges}
        id="paperInputs1"></input>
      {/* <WiredInput
        className="borde"
        type="text"
        name="currentTodo"
        value={props.currentTodo}
        onChange={props.handleChanges}
        placeholder="New Task"
      /> */}
<button onClick={props.handleSubmit}  style={{ color:"#1780a1", borderBlockColor:"#1780a1",backgroundColor:"#D8A7CA"}}className="paper-btn btn-primary-outline" value="Primary"> New Task</button>
      {/* <WiredButton  elevation={2} onClick={props.handleSubmit}>Add Item</WiredButton> */}
      <button  style={{ color:"#1780a1", borderBlockColor:"#1780a1", backgroundColor:"#D8A7CA" }}className="paper-btn btn-primary-outline"  onClick={props.clearCompleted}> Clear Completed</button>
      {/* <WiredButton  elevation={2} onClick={props.clearCompleted}>Clear Completed</WiredButton> */}
    </div>
  );
}
