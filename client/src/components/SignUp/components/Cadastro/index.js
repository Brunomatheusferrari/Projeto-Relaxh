import React from "react"
import { InputPrincipal } from "../../../InputPrincipal/index"
import { ButtonSub } from "../ButtonSub/index"

import "./styles.css"

export function Cadastro() {
    return (
        <>
        <div className="header">
            <h1 className="title">Cadastrar - se</h1>
            <div className="info">
                <div className="input-container">
                    <div className="input-capsule">
                        <InputPrincipal placeholder="Email" />
                    </div>
                    <div className="input-capsule">
                        <InputPrincipal placeholder="Confirmar Email"/>
                    </div>
                    <div className="input-capsule">
                        <InputPrincipal placeholder="Senha"/>
                    </div>
                    <div className="input-capsule">
                        <InputPrincipal placeholder="Senha"/>
                    </div>
                </div>
            </div>
            <div>
                <ButtonSub title="Cadastre-se"/>
            </div>
        </div>
        </>
    )
}
