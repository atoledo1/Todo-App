import React from 'react';

export default function Todo(props) {
    const { item, id, completed } = props.todo;
    return (
<div>
        <wired-checkbox
    onClick={() => props.toggleTask(id)}
    className={`${completed ? 'completed' : ''}`}
    >
            <li>{item}</li>
       </wired-checkbox>
</div>
    );
}
