import React from "react";
import "./style.css"
function Lista(){
    return(
        <ul>
            {props.tarefas.map(t => <item key = {t} valor = {t}/>)}
        </ul>
    )
}

export default Lista;