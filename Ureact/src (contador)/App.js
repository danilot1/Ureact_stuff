import React from "react";
import { useState } from "react";
import Lista from "./components";

export default function App() {
    const [lista, setlista] = useState([])
    const [palavra, setpalavra] = useState([])

    function adicionar() {
        setlista([...lista, palavra])
    } function apagar() {
        setlista(lista - palavra)
    }

    return (
        <div>

            <input type="string" onChange={e => setpalavra(e.target.value)} value={palavra} placeholder="digite seu item" />
            <button onClick={adicionar}>Adicionar</button>
            <button onClick={apagar}>Apagar</button>
            <Lista tarefas ={Tasks}/>
        </div>

    );
}