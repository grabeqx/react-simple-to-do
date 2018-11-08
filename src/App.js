import React, { Component } from "react";
import "./App.css";

import { TasksContext, tasks } from './context/tasksContext';
import AddTask from './componants/AddTask';
import TasksList from './componants/TasksList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: tasks
        };
        this.submitTask = this.submitTask.bind(this);
    }

    submitTask(value) {
        console.log(value);
        this.setState({
            tasks: [...this.state.tasks, value]
        })
        console.log(this.state);
    }

    render() {
        const {Provider} = TasksContext;
        return (
            <Provider value={this.state.tasks}>
                <div className="App">
                    <AddTask submitTask={this.submitTask}>task</AddTask>
                    <TasksList />
                </div>
            </Provider>
        );
    }
}

export default App;
