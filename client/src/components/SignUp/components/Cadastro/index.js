import React, { useState } from "react"
import { useRegister } from "../../../../contexts/registerContext"
import { InputPrincipal } from "../../../InputPrincipal/index"
import { ButtonSub } from "../ButtonSub/index"

import "./styles.css"

export function Cadastro({ next }) {
    const { state, dispatch, registerUser } = useRegister();
    const [email, setEmail] = useState(state.email);
    const [password, setPassword] = useState(state.password)

    async function handleClick() {
        dispatch({ type: "CADASTRO", payload: {email, password} })
        await registerUser(email,password)
        next();
    }

    return (
        <>
        <div className="header">
            <h1 className="title">Cadastrar - se</h1>
            <div className="info">
                <div className="input-container">
                    <div className="input-capsule">
                        <InputPrincipal value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"  className="inputCadastro"/>
                    </div>
                    <div className="input-capsule">
                        <InputPrincipal placeholder="Confirmar Email" className="inputCadastro"/>
                    </div>
                    <div className="input-capsule">
                        <InputPrincipal placeholder="Senha"  value={password} onChange={e => setPassword(e.target.value)} className="inputCadastro"/>
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
