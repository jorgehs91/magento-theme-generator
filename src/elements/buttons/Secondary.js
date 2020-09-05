import React from "react";
import {defaultButton} from "./Default";

const secondaryButton = {
    backgroundColor: '#1979c3',
    border: '1px solid #1979c3',
    color: '#fff'
}

const style = {
    ...defaultButton,
    ...secondaryButton
}

function Secondary(props) {
    return (
        <button style={style}>{props.name}</button>
    )
}

export default Secondary;
