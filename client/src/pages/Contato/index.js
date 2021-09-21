import React from "react";
import { Link } from "react-router-dom";
import { ContatoContainer } from "../../components/ContatoContainer";
import { InputPrincipal } from "../../components/InputPrincipal";
import { SubmitButton } from "../../components/SubmitButton";
import { TextAreaPrincipal } from "../../components/TextAreaPrincipal";



export function Contato(props) {

    return (

        <ContatoContainer>
            <div className="contatoContainer">
                <div className="contatoAdjust">
                    <h1 className="contatoTitle">Contato</h1>
                    <div className="contatoInputs">
                        <div className="inputsDois">
                        <InputPrincipal type="text" placeholder="Nome" />
                        <InputPrincipal type="text" placeholder="Título" /> 
                        </div>                       
                        <TextAreaPrincipal placeholder="Descrição" /> 
                    </div>
                    <SubmitButton> 
                        <Link to="/enviar" label="enviar" className="loginButtonStyle">Enviar</Link>
                    </SubmitButton>
                </div>
            </div>
        </ContatoContainer>
    )
}