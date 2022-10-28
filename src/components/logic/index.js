import React from "react";
import {useContador} from "../Hooks/useContador"
import {Contador} from "../contador/index"
import "./logic.css"
export const Logic = () => {
 const {Aumentar, Disminuir, Resetear, data} = useContador();

return(
    <div>
        <Contador Contador ={data} />
        <button onClick={()=>Aumentar()}>Aumentar</button>
        <button onClick={()=>Resetear()}>Resetear</button>   
        <button onClick={()=>Disminuir()}>Disminuir</button> 
        </div>
)
}
