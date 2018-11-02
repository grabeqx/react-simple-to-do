import React, { Component } from "react";
import { TasksContext } from '../context/tasksContext';
import Task from "./Task";

class AddTask extends Component {

    render() {
        const { Consumer } = TasksContext;
        return (
            <Consumer>
                {color => <p>{ color }</p>}
            </Consumer>
        )
    }
}


export default AddTask;