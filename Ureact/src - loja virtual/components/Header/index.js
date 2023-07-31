import React from "react";
import logo from "../../assets/logo.png"
import "./style.css"
import lupa from "../../assets/lupa.png"

export default function Header() {
    return (
        <header classname="header">
            <div className="barra">
                <img src={logo} width={200} height={200} />
                <div className="container-btn">
                    <button className=" buttonheader"  >
                        Carrinho
                    </button>
                    <button className=" buttonheader">
                        Lista de desejos
                    </button>
                    <button className=" buttonheader">
                        Login ou cadastro
                    </button>
                </div>
                <div class="barra">
                    <input className="input" />
                    <button className=" button">
                        <img src={lupa} width={13} height={13} />
                    </button>
                </div>
            </div>
        </header>

    );
}