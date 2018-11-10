import React from 'react';

const Button = (props) => {
    return (
        <button className="submit-button" onClick={props.onClick}>{props.children}</button>
    )
}

export default Button;