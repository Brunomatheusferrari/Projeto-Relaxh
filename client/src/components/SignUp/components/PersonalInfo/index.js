import React from "react"
import { useRegister } from "../../../../contexts/registerContext"
import { DateInput } from "../../../DateInput"
import { InputPrincipal } from "../../../InputPrincipal/index"
import { ButtonSub } from "../ButtonSub/index"


import "./styles.css"

export function PersonalInfo({ next }) {
  const { state, dispatch } = useRegister();  

  function handleClick() {
      // dispatch({ type: "CADASTRO", payload: {email, confirmarEmail, senha, confirmarSenha} })
      next();
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
