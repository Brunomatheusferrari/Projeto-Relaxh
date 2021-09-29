import React from "react"
import { useState } from "react"
import { useRegister } from "../../../../contexts/registerContext"
import { DateInput } from "../../../DateInput"
import { ButtonSub } from "../ButtonSub/index"
import { useForm } from "react-hook-form";


import "./styles.css"

export function Reserva({ next }) {
  const { state, dispatch } = useRegister();  
  const { register, handleSubmit, formState: { errors }, clearErrors, getValues } = useForm();
  const [tipo_quarto, setTipo_quarto] = useState("Standart")

  function onSubmit(data) {
    const { data_entrada, data_saida, numero_pessoas} = data
    dispatch({ type: "RESERVA", payload: {data_entrada, data_saida, tipo_quarto, numero_pessoas} })
    next();
  }
  
  return (
    <div className="header">
    <h1 className="title">Reserva</h1>
    <div className="info">
        <div className="input-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-capsule">
                    <p className="titleInput">Data de Entrada</p>
                    <DateInput type="datetime-local" {...register("data_entrada", { required: true })} onChange={() => clearErrors("data_entrada")} placeholder="Data de Entrada"  className="inputCadastro"/>
                </div>
                {errors.data_entrada && <span>This field is required</span>}
                <div className="input-capsule">
                    <p className="titleInput">Data de Saída</p>
                    <DateInput type="datetime-local"  {...register("data_saida", { required: true })} onChange={() => clearErrors("data_saida")} placeholder="Confirmar Email" className="inputCadastro"/>
                </div>
                {errors.data_saida && <span>This field is required</span>}
                <div className="input-capsule">
                    <p className="titleInput">Número de Pessoas</p>
                    <DateInput type="number"  {...register("numero_pessoas", { required: true })} onChange={() => clearErrors("numero_pessoas")} placeholder="Número de Pessoas" className="inputCadastro"/>
                </div>
                {errors.numero_pessoas && <span>This field is required</span>}
                <div className="input-capsule">
                    <p className="titleInput">Tipo do Quarto</p>
                    <select onChange={(e) => setTipo_quarto(e.target.value)}>
                        <option selected="selected" >Standart</option>
                        <option>Premium</option>
                        <option>Deluxe</option>
                    </select>
                    {/* <DateInput type="text" placeholder="Tipo do quarto" className="inputCadastro" className="lastDateInput"/> */}
                </div>
                <div>
                <ButtonSub title="Continuar"/>
                </div>  
            </form>
        </div>
    </div>
    
  </div>
  )
}
