import React, { Component } from "react";

import { TasksContext } from '../context/tasksContext';
import Button from '../containers/Button';

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: '',
            taskDesc: ''
        };
        this.changeName = this.changeName.bind(this);
        this.changeDesc = this.changeDesc.bind(this);
        this.submitTask = this.submitTask.bind(this);
    }

    static contextType = TasksContext;

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

    submitTask() {
        this.props.submitTask(this.state);
        this.setState({
            taskName: '',
            taskDesc: ''
        });
    }

    render() {
        return (
            <React.Fragment>
                <input onChange={this.changeName} value={this.state.taskName}></input>
                <textarea onChange={this.changeDesc} value={this.state.taskDesc}></textarea>
                <Button onClick={this.submitTask}>{this.props.children}</Button>
            </React.Fragment>
        )
    }
}




export default AddTask;