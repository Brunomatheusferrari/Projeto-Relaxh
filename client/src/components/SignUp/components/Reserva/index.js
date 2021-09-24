import React from "react"
import { useState } from "react"
import { useRegister } from "../../../../contexts/registerContext"
import { DateInput } from "../../../DateInput"
import { InputPrincipal } from "../../../InputPrincipal/index"
import { ButtonSub } from "../ButtonSub/index"

import "./styles.css"

export function Reserva({ next }) {
  const { state, dispatch } = useRegister();  

  const [data_entrada, setData_entrada] = useState(state.data_entrada)
  const [data_saida, setData_saida] = useState(state.data_saida)
  const [tipo_quarto, setTipo_quarto] = useState(state.tipo_quarto)
  const [numero_pessoas, setNumero_pessoas] = useState(state.numero_pessoas)

  function handleClick() {
      console.log(data_entrada, data_saida, numero_pessoas, tipo_quarto)
      dispatch({ type: "RESERVA", payload: {data_entrada, data_saida, tipo_quarto, numero_pessoas} })
      next();
  }
  
  return (
    <div className="header">
    <h1 className="title">Reserva</h1>
    <div className="info">
        <div className="input-container">
            <div className="input-capsule">
                <p className="titleInput">Data de Entrada</p>
                <DateInput type="datetime-local" value={data_entrada} onChange={e => setData_entrada(e.target.value)} placeholder="Data de Entrada"  className="inputCadastro"/>
            </div>
            <div className="input-capsule">
            <p className="titleInput">Data de Saída</p>
                <DateInput type="datetime-local" value={data_saida} onChange={e => setData_saida(e.target.value)} placeholder="Confirmar Email" className="inputCadastro"/>
            </div>
            <div className="input-capsule">
            <p className="titleInput">Número de Crianças</p>
                <DateInput type="number"placeholder="Crianças" value={numero_pessoas} onChange={e => setNumero_pessoas(e.target.value)} className="inputCadastro"/>
            </div>
            <div className="input-capsule">
                <p className="titleInput">Tipo do Quarto</p>
                <DateInput type="text" placeholder="Tipo do quarto"  value={tipo_quarto} onChange={e => setTipo_quarto(e.target.value)} className="inputCadastro" className="lastDateInput"/>
            </div>
            <div>
            <ButtonSub title="Continuar" onClick={handleClick} />
            </div>  
        </div>
    </div>
    
  </div>
  )
}
