import React from "react"
import { useState } from "react"
import { useRegister } from "../../../../contexts/registerContext"
import { DateInput } from "../../../DateInput"
import { InputPrincipal } from "../../../InputPrincipal/index"
import { ButtonSub } from "../ButtonSub/index"
import authServices from "../../../../services/authServices"

import "./styles.css"

export function PersonalInfo() {
    const { state } = useRegister();
    const[ error, setError ] = useState("")

    async function handleClick(e) {
        e.preventDefault();
        console.log(state.email, state.password)
        try {
            await authServices.signIn({email: state.email, password: state.password});            
        } catch (err) {
            setError(err.message);
            console.log(err.message)
        }
    }

  return (
    <>
    <div className="header">
        <h1 className="title">Informações Pessoais</h1>
        <div className="info">
            <div className="input-container">
                <div className="input-capsule">
                    <InputPrincipal placeholder="Nome"  className="inputCadastro"/>
                </div>
                <div className="input-capsule">
                    <DateInput type="number" placeholder="Telefone" className="inputCadastro"/>
                </div>
                <div className="input-capsule">
                <DateInput type="number" placeholder="CPF" className="inputCadastro"/>
                </div>
                <div className="input-capsule">
                    <InputPrincipal placeholder="Endereço"  className="inputCadastro"/>
                </div>
                <div>
                <ButtonSub title="Continuar" onClick={handleClick}/>
                </div>  
            </div>
        </div>
        
    </div>
    </>
  )
}
