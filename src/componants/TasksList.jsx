import React, { Component } from "react";
import { TasksContext } from '../context/tasksContext';
import Task from '../containers/Taks';

class TasksList extends Component {

    static contextType = TasksContext;
    render() {
        console.log(this.context);
        return (
            <React.Fragment>
                <h3>Tasks</h3>
                <TasksContext.Consumer>
                    {value => value.map((val, index) => (<Task key={index} value={val}/>))}
                </TasksContext.Consumer>
            </React.Fragment>
        )
    }
}

TasksList.contextType = TasksContext;

export default TasksList;