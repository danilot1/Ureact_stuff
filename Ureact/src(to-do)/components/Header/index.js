import React from "react";
import logo from "../../assets/logo.png"
import "./style.css"

export default function Header(){
    return(
        <header>
            <img src= {logo} width={200} height={200}/>
            <nav className= "menu">
                <a href="#">Principal</a>
                <a href="#">Contato</a>
                <a href="#">Sobre</a>
            </nav>
        </header>
    );
}