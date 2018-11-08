import React from 'react';

const Task = (props) => {
    return (
        <div>{props.value.taskName}</div>
    )
}

export default Task;