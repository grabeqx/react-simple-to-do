import React, { Component } from "react";
import "./App.css";

import { TasksContext } from './context/tasksContext';
import AddTask from './componants/AddTask';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: {
                color: 'red',
                text: 'hej'
            }
        };

        this.changeColor = this.changeColor.bind(this);
    }

    changeColor() {
        let color = this.state.color === 'red' ? 'blue' : 'red';
        this.setState({
            task: {
                color: color
            }
        });
    }


    render() {
        const {Provider} = TasksContext;
        return (
            <Provider value={this.state.task}>
                <div className="App">
                    <AddTask />
                </div>
                <button onClick={this.changeColor}>Click</button>
            </Provider>
        );
    }
}

export default App;
