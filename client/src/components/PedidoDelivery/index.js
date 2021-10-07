import React from "react";
import "./styles.css"

export function Pedido(props){
    const {nome } = props.comida
    const { quantidade } = props.comida.comida_servico

    return(
        <>
        <hr/>
        <div className="pedido-container">
            <p>Nome: {nome}</p>
            <p>Quantidade: {quantidade}</p>
        </div>
        <hr/>
        </>
    )
}