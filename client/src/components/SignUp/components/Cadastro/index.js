import React from "react"
import { InputPrincipal } from "../../../InputPrincipal/index"


import "./styles.css"

export function Cadastro() {
    return (
        <>
        <div className="header">
            <h1>Cadastro</h1>
            <div className="info">
                <div className="input-container">
                    <div className="input-capsule">
                        <InputPrincipal />
                    </div>
                    <div className="input-capsule">
                        <InputPrincipal />
                    </div>
                    <div className="input-capsule">
                        <InputPrincipal />
                    </div>
                </div>
                <div className="input-container">
                    <div className="input-capsule">
                        <InputPrincipal />
                    </div>
                    <div className="input-capsule">
                        <InputPrincipal />
                    </div>
                    <div className="input-capsule">
                        <InputPrincipal />
                    </div>
                </div>
            </div>
        </div>
        <div>
            <button>Cadastrar-se</button>
        </div>
        </>
    )
}
