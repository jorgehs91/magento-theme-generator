import React from "react";

export const defaultButton = {
    backgroundColor: '#f2f2f2',
    padding: '7px 15px'
}

function Default(props) {
    return (
        <button style={defaultButton}>{props.name}</button>
    )
}

export default Default;