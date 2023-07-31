import React from "react";
import iphonex from "../../assets/iphonex.png"
import headset from "../../assets/headset.png"
import gabinete from "../../assets/gabinete.png"
import monitor from "../../assets/monitor.png"
import "./style.css"

export default function Produtos() {
    return (
        <div class=" produtos">
            <div class=" iphonex">
                <img src={iphonex} width={220} height={300} />
                <center>
                    <p3> IPhone X</p3>
                </center>
                <center>
                    <p4> R$ 1600,00</p4>
                </center>
                <center>
                    <button className="buttonv">Adicionar ao carrinho</button>
                </center>
                <center>
                    <button className="buttonlista"> Adicionar a lista de desejos</button>
                </center>
            </div>
            <div class=" headset">
                <img src={headset} width={220} height={300} />
                <center>
                    <p3>Headset</p3>
                </center>
                <center>
                    <p4> R$ 300,00</p4>
                </center>
                <center>
                    <button className="buttonv">Adicionar ao carrinho</button>
                </center>
                <center>
                    <button className="buttonlista"> Adicionar a lista de desejos</button>
                </center>
            </div>
            <div class="gabinete">
                <img src={gabinete} width={300} height={300} />
                <center>
                    <p3> Gabinete Gamer</p3>
                </center>
                <center>
                    <p4> R$ 280,00</p4>
                </center>
                <center>
                    <button className="buttonv">Adicionar ao carrinho</button>
                </center>
                <center>
                    <button className="buttonlista"> Adicionar a lista de desejos</button>
                </center>
            </div>
            <div class="monitor">
                <img src={monitor} width={300} height={300} />
                <center>
                    <p3> Monitor gamer</p3>
                </center>
                <center>
                    <p4> R$ 450.00</p4>
                </center>
                <center>
                    <button className="buttonv">Adicionar ao carrinho</button>
                </center>
                <center>
                    <button className="buttonlista"> Adicionar a lista de desejos</button>
                </center>
            </div>
        </div>



    );

}
