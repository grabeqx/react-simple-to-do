import React, { Component } from "react";
import "./App.css";

import { TasksContext } from './context/tasksContext';
import Button from './containers/Button';
import TasksList from './componants/TasksList';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        };

        this.addTask = this.addTask.bind(this);
    }

    addTask() {
        this.setState({
            tasks: [...this.state.tasks, 'nowy'] 
        })
    }


    render() {
        const {Provider} = TasksContext;
        return (
            <div className="App">
                <Button onClick={this.addTask}>Add task</Button>
                <Provider value={this.state.tasks}>
                    <TasksList />
                </Provider>
            </div>
        );
    }
}

export default App;
