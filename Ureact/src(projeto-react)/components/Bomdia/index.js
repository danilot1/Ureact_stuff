import React from "react";
export default function Bomdia(props){
    return(
        <div>
            <h1>Bom dia, {props.nome}</h1>
            <p>Sua Idade é {props.idade}</p>
        </div>
    );
}