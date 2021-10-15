import React from "react";
import "./styles.css"

export function PedidoLimpeza(props){
    const { horario, descricao} = props.pedido

    console.log(horario)

    horario.split("-")

    console.log(horario[12],horario[13] ,horario[14],horario[15])

    return(
        <>  
            <div className="pedido-container">
                <p className="tipo">{descricao}</p>
                <p className="horario">{`${horario[12]}:${horario[14]}${horario[15]}`}</p>
            </div>
        </>
    )
}