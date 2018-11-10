import React, { Component } from "react";
import "./App.css";

import { TasksContext, tasks } from './context/tasksContext';
import AddTask from './componants/AddTask';
import TasksList from './containers/TasksList';

class App extends Component {
    constructor(props) {
        super(props);
        this.addTask = (newTask) => {
            this.setState({
                tasks: [...this.state.tasks, newTask]
            })
        }
        this.removeTask = (e) => {
            let index = this.state.tasks.findIndex(task => task.taskId === parseInt(e.target.dataset.taskId));
            this.setState({
                tasks: [
                    ...this.state.tasks.slice(0, index),
                    ...this.state.tasks.slice(index + 1)
                ]
            })
        }

        this.state = {
            tasks: tasks,
            addTask: this.addTask,
            removeTask: this.removeTask
        };
    }

    render() {
        const {Provider} = TasksContext;
        return (
            <Provider value={this.state}>
                <div className="App">
                    <AddTask>Add task</AddTask>
                    <TasksList />
                </div>
            </Provider>
        );
    }
}

export default App;
