import React from "react"
import { useRegister } from "../../../../contexts/registerContext"
import { DateInput } from "../../../DateInput"
import { InputPrincipal } from "../../../InputPrincipal/index"
import { ButtonSub } from "../ButtonSub/index"

import "./styles.css"

export function Reserva({ next }) {
  const { state, dispatch } = useRegister();  

  function handleClick() {
      // dispatch({ type: "CADASTRO", payload: {email, confirmarEmail, senha, confirmarSenha} })
      next();
  }
  
  return (
    <div className="header">
    <h1 className="title">Reserva</h1>
    <div className="info">
        <div className="input-container">
            <div className="input-capsule">
                <p className="titleInput">Data de Entrada</p>
                <DateInput type="datetime-local" placeholder="Data de Entrada"  className="inputCadastro"/>
            </div>
            <div className="input-capsule">
            <p className="titleInput">Data de Saída</p>
                <DateInput type="datetime-local" placeholder="Confirmar Email" className="inputCadastro"/>
            </div>
            <div className="input-capsule">
            <p className="titleInput">Número de Crianças</p>
                <DateInput type="number"placeholder="Crianças"  className="inputCadastro"/>
            </div>
            <div className="input-capsule">
                <p className="titleInput">Número de Adultos</p>
                <DateInput type="number"placeholder="Adultos"  className="inputCadastro" className="lastDateInput"/>
            </div>
            <div>
            <ButtonSub title="Continuar" onClick={handleClick} />
            </div>  
        </div>
    </div>
    
  </div>
  )
}
