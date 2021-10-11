import React from "react";
import "./styles.css"

export function Pedido(props){
    const {nome } = props.comida
    const { quantidade } = props.comida.comida_servico

    return(
        <>  
            <div className="pedido-container">
                <p className="nome">{nome}</p>
                <p className="quantidade">{quantidade}</p>
            </div>
        </>
    )
}