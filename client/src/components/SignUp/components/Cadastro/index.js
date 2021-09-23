import React, { useState } from "react"
import { useRegister } from "../../../../contexts/registerContext"
import { InputPrincipal } from "../../../InputPrincipal/index"
import { ButtonSub } from "../ButtonSub/index"

import "./styles.css"

export function Cadastro({ next }) {
    const { state, dispatch } = useRegister();
    const [email, setEmail] = useState(state.email);

    function handleClick() {
        // dispatch({ type: "CADASTRO", payload: {email, confirmarEmail, senha, confirmarSenha} })
        next();
    }

    return (
        <>
        <div className="header">
            <h1 className="title">Cadastrar - se</h1>
            <div className="info">
                <div className="input-container">
                    <div className="input-capsule">
                    {/* value={email} onChange={e => setEmail(e.target.value)} */}
                        <InputPrincipal placeholder="Email"  className="inputCadastro"/>
                    </div>
                    <div className="input-capsule">
                        <InputPrincipal placeholder="Confirmar Email" className="inputCadastro"/>
                    </div>
                    <div className="input-capsule">
                        <InputPrincipal placeholder="Senha"  className="inputCadastro"/>
                    </div>
                    <div className="input-capsule">
                        <InputPrincipal placeholder="Confirmar Senha"  className="inputCadastro"/>
                    </div>
                    <div>
                    <ButtonSub title="Continuar" onClick={handleClick} />
                    </div>  
                </div>
            </div>
            
        </div>
        </>
    )
}
