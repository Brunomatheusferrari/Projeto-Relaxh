import React from "react";
import { Link } from "react-router-dom";
import { InputPrincipal } from "../../components/InputPrincipal";
import { ServicoLimpeza } from "../../components/ServicoLimpeza";

export function Limpeza(props) {

    return (

        <ServicoLimpeza>
            <div className="ServicoLimpeza">
                <h1 className="TitleLimpeza">Limpeza</h1>
                <InputPrincipal type="text" placeholder="Tipo de Limpeza" />
                <InputPrincipal type="text" placeholder="Horário" />
                <InputPrincipal type="text" placeholder="Número do quarto" />
            </div>
            <div className="leaves8"></div>
            <div className="leaves9"></div> 

        </ServicoLimpeza>
    )
}
