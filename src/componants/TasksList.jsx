import React, { Component } from "react";
import { TasksContext } from '../context/tasksContext';

class TasksList extends Component {

    render() {
        let tasks = this.context;
        console.log(tasks);
        return (
            <React.Fragment>
                <h3>Tasks</h3>
                {tasks.map((task, index) => (
                    <div key={index}>taks</div>
                ))}
            </React.Fragment>
        )
    }
}

TasksList.contextType = TasksContext;

export default TasksList;