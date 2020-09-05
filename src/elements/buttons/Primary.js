import React from "react";
import {defaultButton} from "./Default";

const primaryButton = {
    backgroundColor: '#1979c3',
    border: '1px solid #1979c3',
    color: '#fff'
}

const style = {
    ...defaultButton,
    ...primaryButton
}

function Primary(props) {
    return (
        <button style={style}>{props.name}</button>
    )
}

export default Primary;