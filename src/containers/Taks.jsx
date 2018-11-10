import React from 'react';

const Task = (props) => {
    return (
        <div className="task-container">
            <h4>{props.value.taskName}</h4>
            <p>{props.value.taskDesc}</p>
            <button onClick={props.onClick} data-task-id={props.value.taskId}>Remove</button>
        </div>
    )
}

export default Task;