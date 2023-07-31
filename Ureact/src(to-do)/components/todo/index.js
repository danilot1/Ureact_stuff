import React, { useState } from "react";

export default function Todo() {
    const [tarefa, setTarefa] = useState()
    const [ listaDetarefas, setListaDeTarefas ] = useState([])
  
    function handleClick() {
        listaDetarefas.push(tarefa)
        setTarefa("")
    
    function handleClick( ){
        setListaDeTarefas([tarefa, ...listaDetarefas])
        setTarefa("")
    }
    
    }
    return (
        <div className="container">
            <div classname="form">
                <input onChange={event => setTarefa(event.target.value)} value={tarefa} placeholder="Digite uma tarefa" />
                <button onClick={handleClick}>Adicionar</button>
            </div>
            <Lista tarefas = {listaDetarefas}/>
        </div>
    );
}
 