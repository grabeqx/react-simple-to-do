import React, { Component } from "react";

import { TasksContext } from '../context/tasksContext';
import Button from '../containers/Button';

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: '',
            taskDesc: '',
            taskId: ''
        };
        this.changeName = this.changeName.bind(this);
        this.changeDesc = this.changeDesc.bind(this);
        this.submitTask = this.submitTask.bind(this);
    }

    changeName(e) {
        this.setState({
            taskName: e.target.value
        })
    }

    changeDesc(e) {
        this.setState({
            taskDesc: e.target.value
        })
    }

    clearState() {
        this.setState({
            taskName: '',
            taskDesc: '',
            taskId: ''
        })
    }

    submitTask(callback) {
        this.setState({
            taskId: new Date().getTime()
        }, () => {
            callback(this.state);
            this.clearState();
        })
    }

    render() {
        return (
            <div className="add-task-container">
                <h3>Add task</h3>
                <input onChange={this.changeName} value={this.state.taskName} placeholder="Task name"></input>
                <textarea onChange={this.changeDesc} value={this.state.taskDesc} placeholder="Task description"></textarea>
                <TasksContext.Consumer>
                 {({addTask}) => <Button onClick={() => this.submitTask(addTask)}>{this.props.children}</Button>}
                </TasksContext.Consumer>
            </div>
        )
    }
}


export default AddTask;