import React from "react";
import Default from "./buttons/Default";
import Primary from "./buttons/Primary";
import Secondary from "./buttons/Secondary";

function Buttons() {
    return (
        <div>
            <Default name="Default Button"></Default>
            <Primary name="Primary Button"></Primary>
            <Secondary name="Secondary Button"></Secondary>
        </div>
    );
}

export default Buttons;
