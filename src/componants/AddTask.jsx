import React, { Component } from "react";

import Button from '../containers/Button';

class AddTask extends Component {

    render() {
        return (
            <Button onClick={this.props.clickAction}>Dodaj</Button>
        )
    }
}




export default AddTask;