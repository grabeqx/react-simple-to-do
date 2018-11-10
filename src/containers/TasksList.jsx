import React from "react";
import { TasksContext } from '../context/tasksContext';
import Task from './Taks';

const TasksList = () => {
    return (
        <div className="tasks-list-container">
            <h3>Tasks</h3>
            <ul className="tasks-list">
                <TasksContext.Consumer>
                    {({tasks, removeTask}) => tasks.map((val, index) => (<li key={index}><Task onClick={removeTask} value={val}/></li>))}
                </TasksContext.Consumer>
            </ul>
        </div>
    )
}

export default TasksList;