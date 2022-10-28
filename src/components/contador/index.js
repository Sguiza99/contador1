import React from "react";
import "./contador.css"

export const Contador = ({Contador}) => {
    return (
        <div>
            <h2 id="counter"> {Contador}</h2>
        </div>
    )
}